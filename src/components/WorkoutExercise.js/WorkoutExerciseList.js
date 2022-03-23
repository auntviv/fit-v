
import React, { useState, useEffect } from "react"
import { getWorkoutExercises } from "./WorkoutExerciseManager.js"

export const WorkoutExerciseList = (props) => {
    const [workoutExercises, setWorkoutExercises ] = useState([])

    useEffect(() => {
        getWorkoutExercises().then(data => setWorkoutExercises(data))
    }, [])

    return (
        <button className="btn btn-2 btn-sep icon-create"
    onClick={() => {
        history.push({ pathname: "/workoutExercises/new" })
    }}
>Register New Log</button>

    )
}