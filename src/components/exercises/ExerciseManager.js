export const getExercises = () => {
    return fetch("http://localhost:8000/exercises", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createExercise = (exercise) => {
    return fetch("http://localhost:8000/exercises", { 
        "Authorization": `Token ${localStorage.getItem("lu_token")}`

    })
        .then()
}

export const getExerciseTypes = () => {
    return fetch("", { })
        .then()
}