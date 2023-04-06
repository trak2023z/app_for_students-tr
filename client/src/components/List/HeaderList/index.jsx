import React from "react";
import { Field, Button } from "components";
import * as Styles from "./styles";

const HeaderList = ({ header, register, watch, setModalIsOpenFormAdd }) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>{header}s</Styles.Header>
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
      <Styles.ButtonWrapper>
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