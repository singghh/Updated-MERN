import React, { useEffect,useState } from "react";
import data3 from "./plastic/data3";


function Education(){


    return(
        <>  
    <div className="grid gap-5 m-20 grid-rows-6 grid-cols-1">
        {
            data3.length>0?
            
            data3.map((items,index)=>{
                return(
                    <div key={index}> 
                        <div className="flex items-center shadow-2xl">
                        <div>
                        <video src={items.url} controls="false" className="w-[700px] border-none"></video>
                        </div>
                        <div className="px-10">
                            <p className="text-3xl font-bold underline">{items.head}</p>
                            <p className="w-[480px] font-semibold pt-10">{items.des}</p>
                        </div>
                        </div>
                        
                    
                </div>
                )
            })
            
            :null
        }
       </div>     
        </>
    )

}
export default Education