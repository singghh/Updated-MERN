import React from "react";
import { ReactTyped, Typed } from "react-typed";


function Hero(){

    return(
        <>
            <div className="text-white flex justify-center text-center sm:mt-[130px] mt-[100px] px-3 h-screen">
                <div className="max-w-[1240px]">
                        <h2 className="uppercase tracking-wider font-bold text-[#00df9a] font-sans">growing withdata analytics</h2>
                        <h1 className="font-bold tracking-wide sm:text-6xl text-4xl">Grow with data.</h1>
                        <div className="flex justify-center items-center sm:pt-3 pt-1"> 
                        <p className="tracking-wider leading-9 font-bold text-1xl sm:text-3xl sm:pb-2 sm:pt-2 pb-1 pt-1">Fast,flexible financing for</p> 
                            <ReactTyped className="font-bold tracking-wide text-gray-700 text-1xl pl-2 sm:text-3xl" strings={[
                                    "BTB",
                                    "BTC",
                                    "SAAS"
                                ]} typeSpeed={120} backSpeed={110} loop>
                                
                            </ReactTyped>
                        </div>
                        <p className="leading-6 text-wrap text-gray-700 font-bold tracking-wide md:text-[19px] sm:pt-3 pt-2">Monitor your data analytics to increase revenue for BTC & SASS platforms.</p>
                        <div className="pt-7">
                        <button className="text-black font-semibold tracking-wide text-[18px] px-10 py-3 rounded-md bg-[#00df9a] outline outline-offset-2 outline-white">Get Started</button>
                        </div>
                </div>
            </div>
        </>
    )

}
export default Hero