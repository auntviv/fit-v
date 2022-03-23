export const getWorkoutExercises = () => {
    return fetch("http://localhost:8000/workoutExercises", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createWorkoutExercise = (workoutExercise) => {
    return fetch("http://localhost:8000/workoutExercises", {  
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
        .then()
}

export const getWorkouts = () => {
    return fetch("", { })
        .then()
}

export const getExercises = () => {
    return fetch("", { })
        .then()
}