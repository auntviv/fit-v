import React, { useEffect, useState } from "react";
import { getWorkouts } from "./WorkoutManager.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const WorkoutList = (props) => {
  const [workouts, setWorkouts] = useState([]);
  const history = useHistory()

  useEffect(() => {
    getWorkouts().then((data) => setWorkouts(data));
  }, []);

  return (
    <article className="workouts">
      {workouts.map((workout) => {
        return (
          <section key={`workout--${workout.id}`} className="workout">
            <h1>
              <button
                className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                  history.push({ pathname: "/workouts/new" });
                }}
              >
                Register Workout
              </button>
            </h1>
            <div className="workout__name">
              This workout is{workout.name}
            </div>
            <div className="workout__organizer">
              This workout is a {workout.category_id} workout.
            </div>
          </section>
        );
      })}
    </article>
  );
};
