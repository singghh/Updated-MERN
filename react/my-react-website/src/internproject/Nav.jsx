import React from "react";
import koinX from "../assets/koinX logo.svg"
import { IoMenu } from "react-icons/io5";

function Nav(){
    return(
        <>
            <div className="w-full bg-white">
                <div className="flex justify-between items-center px-5 h-20 m-auto max-w-[1440px]">
                <div className="">
                        <img src={koinX} alt="KoinX Logo" className="w-32"/>
                </div>
                <div className="md:hidden">
                <IoMenu size={38}/></div>
                <div className="sm:hidden md:flex items-center hidden">
                    <ul className="flex items-center">
                        <li className="p-3 font-semibold tracking-normal text-[16px]">Crypto Taxes</li>
                        <li className="p-3 font-semibold tracking-normal text-[16px]">Free Tools</li>
                        <li className="p-3 font-semibold tracking-normal text-[16px]">Resource Center</li>
                    </ul>
                    <div className="px-5">
                    <button className="p-3 border-none px-7  py-2 font-semibold tracking-wide text-[17px] bg-gradient-to-r from-[#286fea] to-[#1b4bef] text-white rounded-lg">Get Started</button>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Nav