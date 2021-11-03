import React from "react"
import "./Preloader.css"

export const Spinner = (props) =>{
    return(
        <>
            <div id="preloader" hidden={props.estaEscondido}>
                <div id="loader"></div>
            </div>
        </>
    )
}