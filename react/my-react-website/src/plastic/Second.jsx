import React from "react";
import bag from "../assets/bag.png"
import bottle1 from '../assets/bottle.png';
import cup4 from "../assets/cup4.png";
import bottle2 from "../assets/b2.png";
import blue from "../assets/blue.png"
import cup from '../assets/cup.png'
import crush1 from "../assets/crush1.png";
import crush2 from "../assets/crush2.png";
import crush3 from "../assets/crush3.png";


function Second(){
    return(<>
    {/* <Waste></Waste> */}
    <div className="bg-[#2e9cf5] h-screen flex items-center justify-around flex-wrap relative">
        <div>
            <h1 className="text-7xl w-[500px] leading-20 text-white font-semibold">The biggest killer in ocean.</h1>
            <div className="absolute left-[-20px] bottom-[-100px]">
            <img src={blue} alt=""/>
            </div>
            <p className="text-white pt-10 text-2xl w-[500px]">Microplastics, those tiny warriors of pollution, are silently wreaking havoc in our oceans. Let’s dive into their world and explore the impact they have on marine life.</p>
            <div className="pt-8">
            <button className="bg-[#f78c78] p-3 text-center text-lg ">More Details</button></div>
        </div>

        <div>
            <div className="w-fit bg-slate-500 rounded-[50%] p-3 absolute right-3">
                    <img src={bottle2} alt="" width={40}/>
            </div>
            <div className="bg-[#6262ba] rounded-[50%] w-[250px] p-10 text-center relative">
                <h1 className="text-7xl text-white font-bold pt-8">80%</h1>
                <p className="text-white text-lg pb-8">of micro plastics</p>
            </div>
            <div className="w-fit absolute bg-[#51b0ea] rounded-[50%] px-12 py-8 z-30 right-6">
                <img src={bag} alt="bag" width={80}/>
            </div>
            <div className="absolute right-90 bg-[#ae8b89] rounded-[50%]">
                <img src={bottle1} alt="bottle" width={80}/>
            </div>
            <div className="absolute right-28 bg-[#b3bf85] rounded-[50%] top-28">
                <img src={cup} alt="bottle" width={70}/>
            </div>
            {/* <div className="absolute right-66  rounded-[50%] top-4 rotate-45 bg-white p-2">
                <img src={crush3} alt="bottle" width={60}/>
            </div> */}

        </div>

    </div>
    
    </>)
}
export default Second