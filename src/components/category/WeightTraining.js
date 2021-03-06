import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const WeightTrainingList = () => {
  const [weightTraining, setWeightTraining] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/exercises?category=1", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
      .then((res) => res.json())
      .then((categoriesArray) => {
        setWeightTraining(categoriesArray);
      });
  }, []);

  return (
    <>
      {weightTraining.map((weightTrainingObject) => {
        return (
          <Link to={`/details/${weightTrainingObject.id}`}>
            <h1 key={JSON.stringify(weightTrainingObject)}>
              <h1>{weightTrainingObject?.name}</h1>
            <img src={weightTrainingObject?.image} height="500" width="450" /></h1>{" "}
          </Link> 
        );
      })}
    </>
  );
};
