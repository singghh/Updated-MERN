import React,{useContext} from "react"
import ComponentD from "./ComponentD.jsx"
import {userContext} from "./ComponentA.jsx"

function ComponentC(){
    const names=useContext(userContext)
    return(
        <div className="ans">
            <h3>Component C</h3>
            <p>Bye {names}</p>
            <ComponentD></ComponentD>
        </div>
        
    )
}
export default ComponentC