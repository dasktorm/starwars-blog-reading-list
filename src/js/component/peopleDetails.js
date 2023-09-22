import React, {useContext, useEffect, useState} from "react"
import {useParams, userParams} from "react-router"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"

const PeopleDetails=() => {
const params = useParams()
const{store, actions} = useContext(Context) 
useEffect(
    () => {actions.getCharacterDetails(params.id)}, []
)
    return(
        <div className="m-auto container align-content-center justify-content-center">
            <h1>{store.charactersDetails.name}</h1>
            <h1>Eye: {store.charactersDetails.eye_color}</h1>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}/>
        </div>
    )
}

export default PeopleDetails