import React, { useState } from "react";
import data from "./data.js"

function Example(){

    const [select,setSelect]=useState(null);
    const [enableMultipleSelection,setEnableMultiSelection]=useState(false);
    const [multiple,setMultiple]=useState([]);


    function handleSingleAccordian(selectItemId){
        setSelect(selectItemId===select?null:selectItemId);
    }

    function handleMultipleSelection(Answer){
        const cpyItems=[...multiple];
        let findIndexOfElements=cpyItems.indexOf(Answer);

        findIndexOfElements===-1?cpyItems.push(Answer):cpyItems.splice(findIndexOfElements,1);

        setMultiple(cpyItems);
    }
    console.log(multiple)
    return(<>
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultipleSelection)}>Enable Multiple Selection</button>
            <div className="content">

                    {
                        data && data.length>0?
                        data.map((dataItems,index)=>(
                            <div className="items" key={index}>
                                <div onClick={enableMultipleSelection?()=>handleMultipleSelection(dataItems.id):()=>handleSingleAccordian(dataItems.id)} className="questions">
                                    <h3>{dataItems.question}</h3>
                                    <span>+</span>

                                    {
                                        select===dataItems.id||multiple.indexOf(dataItems.id)!==-1?
                                        <p>{dataItems.Answer}</p>
                                        :null
                                    }

                                </div>
                            </div>
                        ))
                        :<div>Null</div>
                    }

            </div>
        </div>
    </>)
}

export default Example