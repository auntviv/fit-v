import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  createWorkoutExercise,
  getWorkoutExercises,
  getWorkoutExercise,
  getExercises,
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
    exercise: 0,
    reps: 0,
    sets: 0,


  });

  const history = useHistory();

  useEffect(() => {
    getExercises().then((data) => setExercises(data));
  }, []);

  const updateWorkoutExerciseState = (evt) => {
    evt.preventDefault();
    const copy = { ...currentWorkoutExercise };
    let key = evt.target.name;
    copy[key] = evt.target.value;
    setCurrentWorkoutExercise(copy);
  };

  const params = useParams();

  useEffect(()=> { 
      (async() => {if (params.id !== undefined){
       const data = await getWorkoutExercise(params.id).then((data) => data);
        console.log(data)
        setCurrentWorkoutExercise({
            workout: data.workout.id,
            exercise: data.exercise.id,
            reps: data.reps,
            sets: data.sets
        
        
          })
      }})()
  },[])


  return (
    <form className="workoutExerciseForm">
      <h2 className="workoutExerciseForm__name">Fill Out Workout Log</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="workout">Exercise:</label>
          <select
            value={currentWorkoutExercise?.exercise}
            name="exercise"
            className="form-control form-control-sm"
            onChange={updateWorkoutExerciseState}
          >
            <option value="0">Select a Workout Type</option>
            {exercises && exercises.map((e) => {
             return <option key={e.id} value={e.id}>
                {/* the value of e.id here is associated with the select value */}
                {e?.name}
              </option>
              //just creating a new array populated with the results of of the function called
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Reps: </label>
          <input
            type="text"
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
            type="text"
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
            exercise: currentWorkoutExercise.exercise,
            reps: currentWorkoutExercise.reps,
            sets: currentWorkoutExercise.sets,
          };
          if (params.id !== undefined){
            //   do PUT
          } else {

         
          // Send POST request to your API
          createWorkoutExercise(workoutExercise).then(() =>
            history.push("/workoutExercises")
          );
        }
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
  );
};
