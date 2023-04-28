import React from "react";
import { Field, Button } from "components";
import * as Styles from "./styles";

const HeaderList = ({
  header,
  register,
  watch,
  setModalIsOpenFormAdd,
  isDone,
  setIsDone,
}) => {
  return (
    <Styles.Wrapper isInput={header !== "Deadline"}>
      <Styles.Header>{header}s</Styles.Header>
      {header !== "Deadline" && header !== "Todolist" ? (
        <Styles.InputWrapper>
          <Field
            name={`${header.toLowerCase()}-search`}
            register={register}
            watch={watch}
            headerList={true}
            headerName={
              header === "Subject"
                ? "Search by name"
                : header === "Note"
                ? "Search by topic"
                : "Search"
            }
          />
        </Styles.InputWrapper>
      ) : header === "Todolist" ? (
        <Styles.TodlistIsDonedWrapper>
          <Styles.TodlistDoned isDone={isDone} onClick={() => setIsDone(true)}>
            DONED
          </Styles.TodlistDoned>
          <Styles.TodlistNotDoned
            isDone={isDone}
            onClick={() => setIsDone(false)}
          >
            NOT DONED
          </Styles.TodlistNotDoned>
        </Styles.TodlistIsDonedWrapper>
      ) : (
        <></>
      )}
      <Styles.ButtonWrapper isInput={header !== "Deadline"}>
        <Button
          width="65%"
          height="7vh"
          name={`Add ${header}`}
          onClick={() => setModalIsOpenFormAdd(true)}
        />
      </Styles.ButtonWrapper>
    </Styles.Wrapper>
  );
};

export default HeaderList;
