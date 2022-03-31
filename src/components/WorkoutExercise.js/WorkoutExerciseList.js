import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getWorkoutExercises, deleteWorkoutExercise } from "./WorkoutExerciseManager.js";

export const WorkoutExerciseList = (props) => {
  const [workoutExercises, setWorkoutExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/workoutExercises", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    getWorkoutExercises().then((data) => setWorkoutExercises(data));
  }, []);

  const history = useHistory();

  return (
    <>
      <h2>
        <button
          onClick={() => history.push({ pathname: "/workoutExercises/new" })}
        >
          Register New Log
        </button>
      </h2>

      <ul className="WorkoutExerciseListObj">
        {workoutExercises.map((WorkoutExerciseObject) => {
            
          return (
            <div>
            <div className="workoutExercise__exercises">
               You worked on your {WorkoutExerciseObject.exercise?.category?.type} today.
            </div>
            <div className="workoutExercise__sets">
            {WorkoutExerciseObject.sets} sets.
            </div>
            <div className="workoutExercise__reps">
              {WorkoutExerciseObject.reps} reps.
            </div>
              <button
                className="btn-primary"
                onClick={() => deleteWorkoutExercise(WorkoutExerciseObject.id).then(res => setWorkoutExercises(res))
                    .then(() => history.push("/workoutExercises"))
                }
                
              >
                Delete
              </button>
              <button
                className="btn-primary"
                onClick={() => history.push( `/workoutExercises/edit/${WorkoutExerciseObject.id}`
                  )
                }
              >
                Edit
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};
