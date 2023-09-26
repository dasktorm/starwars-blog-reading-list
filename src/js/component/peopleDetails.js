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
      <div className="container align-content-center justify-content-center">
        <h1>{store.charactersDetails.name}</h1>
        <hr></hr>
        <div />

        <div className="d-flex flex-row">
          <p>Eye: {store.charactersDetails.eye_color}</p>
          <p>Height: {store.charactersDetails.height}</p>
          <p>Birth Year: {store.charactersDetails.birth_year}</p>
        </div>

        {/* Preguntarle a Juanjo como manipular la imagen */}
        <div className="">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
          />
        </div>

        {/* Hay posibilidad de traer la descripción del personaje? */}
        <div>
            <p>Description:</p>
    
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;