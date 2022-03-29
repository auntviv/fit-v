export const getWorkouts = () => {
    return fetch("http://localhost:8000/workouts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createWorkout = (workout) => {
    return fetch("http://localhost:8000/workouts", {
        "Authorization": `Token ${localStorage.getItem("lu_token")}`

     })
        .then()
}

export const getWorkoutTypes = () => {
    return fetch("http://localhost:8000/workouts", { "Authorization": `Token ${localStorage.getItem("lu_token")}`
})
        .then()
}