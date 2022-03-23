
import React, { useState, useEffect } from "react"
import { getExercises } from "./ExerciseManager.js"

export const ExerciseList = (props) => {
    const [exercises, setExercises ] = useState([])

    useEffect(() => {
        getExercises().then(data => setExercises(data))
    }, [])

    return (
        <article className="exercises">
            {
                exercises.map(exercise => {
                    return <section key={`exercise--${exercise.id}`} className="exercise">
                        <div className="exercise__name">{exercise.name}</div>
                    </section>
                })
            }
        </article>
    )
}