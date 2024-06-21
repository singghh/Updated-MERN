import React from "react";
import hero from "../assets/sideboximage.png"
import { FaArrowRight } from "react-icons/fa6";

function HeroNewSubComponent(){

    return(
        <>
            <div className="bg-[#1b4bef] text-white w-[355px] rounded-xl hidden lg:block">
                <div className="flex flex-col items-center p-10">
                    <div className="text-center">
                        <h1 className="font-semibold text-2xl w-[250px]">Get Started with KoinX for FREE</h1> 
                    </div>
                    <div className="text-center font-light pt-5">
                        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
                    </div>
                    <div className="pt-8 pb-5">
                    <img src={hero} alt="GirlInMobile" className="w-32 h-32"/></div>
                    <div className="bg-white flex items-center px-5 py-2 rounded-lg gap-4 justify-around">
                        <button className="text-black font-semibold">Get Started for FREE </button>
                        <FaArrowRight size={20} color="black"/>
                    </div>
                </div>
            </div>
        </>
    );

}

export default HeroNewSubComponent