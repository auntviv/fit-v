import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8088/exercises?id=${id}`)
   
      .then((res) => res.json())
      .then(([exercise]) => {
        setDetails(exercise);

      });
  }, [id]);


  return (
    <section className="exercise" key={id}>
      <img src={details?.image} height="auto" width="300" />

      <h2></h2>
      <div className="exercise__exercise"> {details?.exercise}.</div>
    </section>
  );
};
export default Details;


