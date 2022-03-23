import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const YogaList = () => {
  const [yoga, setYoga] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/exercises?category=3", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
      .then((res) => res.json())
      .then((agesArray) => {
        setYoga(agesArray);
      });
  }, []);

  return (
    <>
      {yoga.map((yogaObject) => {
        return (
          <Link to={`/details/${yogaObject.id}`}>
            <h1 key={JSON.stringify(yogaObject)}>
              <h1>{yogaObject?.name}</h1>
              <img src={yogaObject?.image} height="400" width="300" /></h1>{" "}
          </Link> 
        );
      })}
    </>
  );
};