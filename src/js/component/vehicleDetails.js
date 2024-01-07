import React, {useContext, useEffect, useState} from "react"
import {useParams, userParams} from "react-router"
import { Context } from "../store/appContext"

const VehicleDetails = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    useEffect(() => {
      actions.getVehicleDetails(params.id);
      console.log(store.vehicleDetails);
    }, []);
    return (
      <div>
        <div className="container">
          <h1>{store.vehicleDetails.name}</h1>
          <hr></hr>
          <div />
  
          <div className="d-flex justify-content-evenly">
            <p>Diameter: {store.vehicleDetails.cargo_capacity}</p>
            <p>Rotation Period: {store.vehicleDetails.manufacturer}</p>
            <p>Population: {store.vehicleDetails.max_atmosphering_speed}</p>
            <p>Climate: {store.vehicleDetails.name}</p>
          </div>
  
          <div className="d-flex flex-row flex-wrap">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                className="ratio-16x9"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VehicleDetails;