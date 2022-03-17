import React, { useEffect, useState } from "react";
import { getExercises } from "./ExerciseManager.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const ExerciseList = (props) => {
  const [exercises, setExercises] = useState([]);
  const history = useHistory()

  useEffect(() => {
    getExercises().then((data) => setExercises(data));
  }, []);

  return (
    <article className="exercises">
      {exercises.map((exercise) => {
        return (
          <section key={`exercise--${exercise.id}`} className="exercise">
            <h1>
              <button
                className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                  history.push({ pathname: "/exercises/new" });
                }}
              >
                Register New Game
              </button>
            </h1>
            <div className="exercise__name">
              This exercise is{exercise.name}
            </div>
            <div className="exercise__organizer">
              This exercise is a {exercise.category_id} exercise.
            </div>
          </section>
        );
      })}
    </article>
  );
};
