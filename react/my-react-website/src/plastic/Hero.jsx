import React from "react";
import { ReactTyped, Typed } from "react-typed";
import istock from "../assets/clean.jpg"
import { CiMail } from "react-icons/ci";

import cup from "../assets/cup.png";

import { BiDonateHeart } from "react-icons/bi";

import bag3 from '../assets/bag3.png';
import bag4 from "../assets/bag4.png";


function Hero(){

    return(
        <>
        <div className=""> 
            <div className="text-white flex justify-center text-center sm:mt-[90px] mt-[100px] px-3">
                <div className="max-w-[1240px]">
                        <h2 className=" text-black text-5xl leading-snug font-bold font-sans">Ditch Plastic, Save Oceans.</h2>
                        <p className="leading-6 text-wrap text-gray-700 font-semibold tracking-wide md:text-[17px] sm:pt-3 pt-2">No one person can save the environment. But everyone can make a difference.</p>
                        
                        <div className="pt-7 flex justify-center">
                        
                        <button className="text-white font-semibold tracking-wide text-[18px] px-7 py-3 rounded-3xl bg-[#0F39A6] outline outline-offset-2 outline-white flex justify-center items-center gap-3 hover:scale-105 hover:transition ease-in-out duration-150"><BiDonateHeart size={30}/>Want to Donate Us</button>
                        </div>
                        
                </div>
                x
            </div>
            <div className="flex justify-center">
            <img src={istock} alt="clean" width={500} height={500}/>
            </div>
            </div>
            <div className="absolute flex justify-center items-center">


            </div>
        </>
    )

}
export default Hero