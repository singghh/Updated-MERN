import React from "react";
import tort1 from "../assets/tort1.png";
import { useNavigate } from "react-router-dom";

function Four(){

    const navigate=useNavigate()

    function openCal(){
        navigate("./Calculator")
    }


    return(<>
    <div className="bg-[#0b4867] flex items-center h-screen justify-around">
    <div className="">

        <h1 className="text-7xl text-white w-[800px] font-bold leading-tight">The Urgency of the Global Plastic Problem</h1>
              <p className="text-white text-xl w-[700px] pt-8 pb-5">The global plastic crisis is a dire environmental issue, with an estimated 8,300 million metric tons of plastic produced to date, most of which has become waste polluting our planet. The durability of plastics, while beneficial for certain applications, has led to a significant environmental footprint, as these materials do not decompose easily and have ended up in ecosystems worldwide, threatening wildlife and entering the food chain.</p>
              
              <button className="bg-[#f78c78] p-3 text-center text-lg" onClick={openCal}>View Calculator</button>
    </div>

    <div>
        <img src={tort1} alt="" />
    </div>
    
    </div>

    </>)
}
export default Four