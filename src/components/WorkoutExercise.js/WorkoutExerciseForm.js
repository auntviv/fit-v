import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  createWorkoutExercise,
  getWorkoutExercises,
  getExercises,
  getWorkouts,
} from "./WorkoutExerciseManager.js";

export const WorkoutExerciseForm = () => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentWorkoutExercise, setCurrentWorkoutExercise] = useState({
    workout: "",
    exercise: "",
    reps: 0,
    sets: 0
  });

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8000/exercises", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
      });
 
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/workouts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      });
 
  }, []);
  const updateWorkoutExerciseState = (domEvent) => {
 
  };

  return (
    <form className="workoutExerciseForm">
      <h2 className="workoutExerciseForm__name">Fill Out Workout Log</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentWorkoutExercise.title}
            onChange={updateWorkoutExerciseState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="workout">Workout Type:</label>
          <select
            value={parseInt(currentWorkoutExercise?.exercise) || ""}
            id="exercise"
            name="category"
            className="form-control form-control-sm"
            onChange={(e) => updateWorkoutExerciseState(parseInt(e.target.value), "exercise")}
          >
            <option value="0">Select a Workout Type</option>
            {exercises.map((e) => (
              <option key={e.id} id={e.id} value={e.id}>
                {/* the value of e.id here is associated with the select value */}
                {e?.category?.type}
              </option>
              //just creating a new array populated with the results of of the function called
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Exercises Done </label>
          <input
            type="text"
            name="Exercises done:"
            required
            autoFocus
            className="form-control"
            value={currentWorkoutExercise.exercise}
            onChange={updateWorkoutExerciseState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Reps: </label>
          <input
            type="int"
            name="reps"
            required
            autoFocus
            className="form-control"
            value={currentWorkoutExercise.reps}
            onChange={updateWorkoutExerciseState}
          />
        </div> 
        <div className="form-group">
          <label htmlFor="">Sets: </label>
          <input
            type="int"
            name="sets"
            required
            autoFocus
            className="form-control"
            value={currentWorkoutExercise.sets}
            onChange={updateWorkoutExerciseState}
          />
        </div>
      </fieldset>

      {/* TODO: create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const workoutExercise = {
            workout: parseInt(currentWorkoutExercise.workout),
            exercise: parseInt(currentWorkoutExercise.exercise),
            reps: currentWorkoutExercise.title,
            sets: currentWorkoutExercise.sets
          };

          // Send POST request to your API
          createWorkoutExercise(workoutExercise).then(() =>
            history.push("/workoutExercises/new")
          );
        }}
        className="btn btn-primary"
      >
        Create
      </button>

    </form>
  );
};
