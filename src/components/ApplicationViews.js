import React from "react";
import { Route } from "react-router-dom";
import { ExerciseList } from "./exercises/ExerciseList.js";
import { ExerciseForm } from "./exercises/ExerciseForm.js";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route exact path="/">
          <ExerciseList />
        </Route>
        <Route exact path="/exercises/new">
          <ExerciseForm />
        </Route>
      </main>
    </>
  );
};
