import React, {useContext, useEffect, useState} from "react"
import {useParams, userParams} from "react-router"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

const VehicleDetails = () => {
const params = useParams()
const{store, actions} = useContext(Context) 
useEffect(
    () => {actions.getVehicleDetails(params.id)}, []
)
    return(
        <div className="m-auto container align-content-center justify-content-center">
            <h1>{store.VehicleDetails.name}</h1>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}/>
        </div>
    )
}

export default VehicleDetails