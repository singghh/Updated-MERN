import React from "react";
import data from "./data.js";
import Slide from "./Slideshow.jsx"

function PlasticSol(){

    return(<>
    <Slide></Slide>
            <div className="m-20 grid grid-cols-3 justify-center gap-5">
                {
                    data.length>0?
                    data.map((item,index)=>{
                        return(
                            <div key={index} className="">
                                
                                <div className="shadow-xl p-2 rounded-md">
                                <div className="">
                                <h1 className="text-xl font-bold py-5 text-[#283583]">{item.head1}</h1></div>
                                <img src={item.images} alt="" className="rounded-lg"/>
                                <div className="py-8">
                                <p className="text-md font-semibold px-6">{item.des}</p></div>
                                </div>
                            
                            </div>
                        )
                    })
                    :null
                }
            </div>
    </>)

}
export default PlasticSol