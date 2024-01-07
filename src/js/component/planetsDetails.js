import React, {useContext, useEffect, useState} from "react"
import {useParams, userParams} from "react-router"
import { Context } from "../store/appContext"

const PlanetDetails = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
      actions.getPlanetsDetails(params.id);
      console.log(store.planetsDetails);
    }, []);
    return (
      <div>
        <div className="container">
          <h1>{store.planetsDetails.name}</h1>
          <hr></hr>
          <div />
  
          <div className="d-flex justify-content-evenly">
            <p>Diameter: {store.planetsDetails.diameter}</p>
            <p>Rotation Period: {store.planetsDetails.rotation_period}</p>
            <p>Population: {store.planetsDetails.population}</p>
            <p>Climate: {store.planetsDetails.climate}</p>
          </div>
  
          <div className="d-flex flex-row flex-wrap">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                className="ratio-16x9"
              />
            </div>
            <div className="col-md-4 mb-0">
              <h2>Description:</h2>
              <p>{store.planetsDetails.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlanetDetails;