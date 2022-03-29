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
        method: "POST",
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
    .then(response => response.json())
}


export const deleteWorkoutExercise = (workoutExercise) => {
    return fetch(`http://localhost:8000/workoutExercises`, {  
        method: "DELETE",
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
    .then(response => response.json())
}


export const editWorkoutExercise = (workoutExercise) => {
    return fetch("http://localhost:8000/workoutExercises/", {  
        method: "PUT",
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }})
        .then(response => response.json())

}

export const getWorkouts = () => {
    return fetch("http://localhost:8000/workouts", { 
        headers:{
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }
})
        .then(response => response.json())
}

export const getExercises = async() => {
    return await fetch("http://localhost:8000/exercises", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
     }).then(res=>res.json())
}

export const getWorkoutExercise = (id) => {
    return fetch(`http://localhost:8000/workoutExercises/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
     }).then(res=>res.json())
}

export const getCategories = (id) => {
    return fetch("http://localhost:8000/categories", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
     }).then(res=>res.json())
}

export const getExercisesByCategory = (id) => {
    return fetch(`http://localhost:8000/exercises?category=${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
      .then((res) => res.json())
}