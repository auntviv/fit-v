import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getWorkoutExercise, getExercises, editWorkoutExercise} from './WorkoutExerciseManager.js'

export const UpdateWorkoutExerciseForm = () => {
    const history = useHistory()
    const { workoutExerciseId } = useParams()
    const [exercises, setExercises] = useState([])
    const [currentWorkoutExercise, setCurrentWorkoutExercise] = useState({
        exercise: 0,
        reps: 0,
        sets:0

    })

    useEffect(() => {
        getExercises().then((data) => setExercises(data));
      }, []);
    useEffect(() => {
        getWorkoutExercise(workoutExerciseId)
        .then(data => setCurrentWorkoutExercise({
            exercise: data.exercise.id,
            reps: data.reps,
            sets: data.sets

        }))
    }, [workoutExerciseId])

    const changeWorkoutExerciseState = (domWorkoutExercise) => {
        domWorkoutExercise.preventDefault()
        const copy = {...currentWorkoutExercise}
        let key = domWorkoutExercise.target.name
        copy[key] = domWorkoutExercise.target.value
        setCurrentWorkoutExercise(copy)
    }

return (
        <form className="workoutExerciseForm">
            <h2 className="workoutExerciseForm__exercise">Update Log</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="exercise">Exercise: </label>
                    <select name="exercise" required className="form-control"
                        value={currentWorkoutExercise.exercise}
                        onChange={changeWorkoutExerciseState}>
                    <option value="0">Select a exercise</option>
                    {
                        exercises.map(e => (
                            <option key={e.id} value={e.id}>{e.name}</option>
                        ))
                    }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Reps: </label>
                    <input type="text" name="reps" required autoFocus className="form-control"
                        value={currentWorkoutExercise.reps}
                        onChange={changeWorkoutExerciseState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Sets: </label>
                    <input type="text" name="sets" required autoFocus className="form-control"
                        value={currentWorkoutExercise.sets}
                        onChange={changeWorkoutExerciseState}
                    />
                </div>
            </fieldset>

<button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const workoutExercise = {
                        name: currentWorkoutExercise.name
                    }

                    // Send POST request to your API
                    editWorkoutExercise(workoutExercise, workoutExercise)
                        .then(() => history.push("/workoutExercises"))
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}