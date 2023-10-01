import React, { useContext, useEffect, useState } from "react";
import { useParams, userParams } from "react-router";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const PeopleDetails = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacterDetails(params.id);
  }, []);
  return (
    <div>
      <div className="container">
        <h1>{store.charactersDetails.name}</h1>
        <hr></hr>
        <div />

        <div className="d-flex justify-content-evenly">
          <p>Eye: {store.charactersDetails.eye_color}</p>
          <p>Height: {store.charactersDetails.height}</p>
          <p>Birth Year: {store.charactersDetails.birth_year}</p>
          <p>Gender: {store.charactersDetails.gender}</p>
        </div>

        {/* Preguntar como manipular la imagen para que se muestre 16x9 */}
        <div className="d-flex flex-row flex-wrap">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
              className="ratio-16x9"
            />
          </div>
          <div className="col-md-4 mb-0">
            <h2>Description:</h2>
            <p>Insert a description here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;