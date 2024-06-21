import React, { useState } from "react";

function Form(){

    const [data,setData]=useState("")
    const [gData,getData]=useState("");
    
    function texts(e){
        setData(e.target.value)
    }
    function ans(){
        getData(data);
    }

    return(<>
    <input type="text" className="border-black border-2" value={data} onChange={texts}/>
    <button className="border-4" onClick={ans}>Submit</button>
    <p>{gData}</p>
    </>)
}
export default Form