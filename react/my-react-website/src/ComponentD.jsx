import React,{useContext} from "react"
import {userContext} from "./ComponentA.jsx";

function ComponentD(){

    const names=useContext(userContext)

    return(
        <div className="ans">
            <h3>Component D</h3>
            <p>Bye {names}</p>
        </div>
        
    )
}
export default ComponentD