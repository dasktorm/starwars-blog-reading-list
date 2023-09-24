import React, {useContext, useEffect, useState} from "react"
import {useParams, userParams} from "react-router"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

const PlanetsDetails = () => {
const params = useParams()
const{store, actions} = useContext(Context) 
useEffect(
    () => {actions.getPlanetsDetails(params.id)}, []
)
    return(
        <div className="m-auto container align-content-center justify-content-center">
            <h1>{store.PlanetsDetails.name}</h1>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}/>
        </div>
    )
}

export default PlanetsDetails