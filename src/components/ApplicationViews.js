import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { ExerciseList } from "./exercises/ExerciseList.js";
import { NavBar } from "./nav/NavBar.js";
import { WorkoutExerciseForm } from "./WorkoutExercise.js/WorkoutExerciseForm.js";
import { CardioList } from "./category/Cardio.js";
import { WeightTrainingList } from "./category/WeightTraining.js";
import { YogaList } from "./category/Yoga.js";
import Details from "./Details/Details.js";
import { WorkoutExerciseList } from "./WorkoutExercise.js/WorkoutExerciseList.js";


export const ApplicationViews = () => {
  const [authorizedUser, setAuthorizedUser] = useState(0);
  useEffect(() => {
    const fitVUser = parseInt(localStorage.getItem("fitV_user"));
    //just setting the current fitV user to the authorized user
    if (fitVUser) {
      setAuthorizedUser(fitVUser);
      //just conditional rendering here
    }
  }, []);

  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route>
          <NavBar />
        </Route>
        <Route exact path="/workoutExercises">
          <WorkoutExerciseList />
        </Route>
        <Route exact path= "/workoutExercises/edit/:id(\d+)">
          <WorkoutExerciseForm />
        </Route>
        <Route exact path="/workoutExercises/new">
          <WorkoutExerciseForm />
        </Route>
        <Route exact path="/exercise">
          <ExerciseList />
        </Route>
        <Route path="/cardio">
          <CardioList />
        </Route>
        <Route path="/weightTraining">
          <WeightTrainingList />
        </Route>
        <Route path="/Yoga">
          <YogaList />
        </Route>
        <Route path="/details/:id(\d+)">
          <Details />
        </Route>
      </main>
    </>
  );
};
