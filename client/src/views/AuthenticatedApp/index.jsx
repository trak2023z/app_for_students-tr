import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Subjects,
  Notes,
  NotesDetails,
  Deadlines,
  Todolist,
  Account,
} from "views";

const AuthenticatedApp = () => {
  const { currentSubject } = useSelector((state) => state.subject);
  return (
    <Routes>
      {currentSubject && (
        <>
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<NotesDetails />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/todolist" element={<Todolist />} />
        </>
      )}
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<Navigate to="/account" />} />
    </Routes>
  );
};

export default AuthenticatedApp;
