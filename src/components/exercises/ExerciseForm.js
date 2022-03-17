import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createExercise, getExerciseTypes } from './ExerciseManager.js'


export const ExerciseForm = () => {
    const history = useHistory()
    const [exerciseTypes, setExerciseTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentExercise, setCurrentExercise] = useState({
        name: "",
        category_id: ""
    })

    useEffect(() => {
        // TODO: Get the exercise types, then set the state
    }, [])

    const changeExerciseState = (domExercise) => {
        // TODO: Complete the onChange function
    }

    return (
        <form className="exerciseForm">
            <h2 className="exerciseForm__name">Name of Exercise</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentExercise.name}
                        onChange={changeExerciseState}
                    />
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prexercise form from being submitted
                    evt.prexerciseDefault()

                    const exercise = {
                        name: parseInt(currentExercise.name),
                    }

                    // Send POST request to your API
                    createExercise(exercise)
                        .then(() => history.push("/exercises"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}