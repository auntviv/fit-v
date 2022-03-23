import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardioList = () => {
  const [cardios, setCardios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/exercises?category=2", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
      .then((res) => res.json())
      .then((agesArray) => {
        setCardios(agesArray);
      });
  }, []);

  return (
    <>
      {cardios.map((cardioObject) => {
        return (
          <Link to={`/details/${cardioObject.id}`}>
            <h1 key={JSON.stringify(cardioObject)}>
              <h1>{cardioObject?.name}</h1>
            <img src={cardioObject?.image} height="400" width="300" /></h1>{" "}
          </Link> 
        );
      })}
    </>
  );
};
