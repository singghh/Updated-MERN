import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";

function Card(){

    return(<>
        <div className="w-full bg-white py-20">
            <div className="grid lg:grid-cols-3 justify-around gap-20 max-w-[1240px] mx-auto">
                <div className="w-fit flex flex-col text-center items-center rounded-lg p-12 shadow-xl md:hover:translate-y-[-20px] ease-in-out duration-500">
                <FaRegUser size={50}/>
                <h2 className="text-2xl font-semibold tracking-wide pt-6">Single User</h2>
                <div className="leading-8 p-8">
                <h1 className="text-5xl font-semibold pb-3"><span className="font-bold">$</span>149</h1>
                <div className="pt-4">
                <p className="font-medium border-b-2 border-b-gray-300 w-48 border-t-2 border-t-gray-300">500 GB Storage</p>
                <p className="font-medium border-b-2 border-b-gray-300">1 User Allowed</p>
                <p className="font-medium border-b-2 border-b-gray-300">Send up tp 2GB</p></div>
                </div>
                <button className="px-12 py-[12px] bg-[#00df9a] rounded-lg font-semibold tracking-wide">Start Trail</button>
                </div>
                <div className="w-fit flex flex-col text-center items-center rounded-lg p-12 shadow-2xl md:hover:translate-y-[-20px] ease-in-out duration-500 bg-gray-200">
                <LuUsers size={50}/>
                <h2 className="text-2xl font-semibold tracking-wide pt-6">Patnership</h2>
                <div className="leading-8 p-8">
                <h1 className="text-5xl font-semibold pb-3"><span className="font-bold">$</span>199</h1>
                <div className="pt-4">
                <p className="font-medium border-b-2 border-b-gray-300 w-48 border-t-2 border-t-gray-300">1TB Storage</p>
                <p className="font-medium border-b-2 border-b-gray-300">1 User Allowed</p>
                <p className="font-medium border-b-2 border-b-gray-300">Send up tp 10GB</p></div>
                </div>
                <button className="px-12 py-[12px] bg-black rounded-lg font-semibold tracking-wide text-[#00df9a] text-[18px]">Start Trail</button>
                </div>
                <div className="w-fit flex flex-col text-center items-center rounded-lg p-12 shadow-xl md:hover:translate-y-[-20px] ease-in-out duration-500">
                <HiOutlineUserGroup size={50}/>
                <h2 className="text-2xl font-semibold tracking-wide pt-6">Group Account</h2>
                <div className="leading-8 p-8">
                <h1 className="text-5xl font-semibold pb-3"><span className="font-bold">$</span>299</h1>
                <div className="pt-4">
                <p className="font-medium border-b-2 border-b-gray-300 w-48 border-t-2 border-t-gray-300">6TB Storage</p>
                <p className="font-medium border-b-2 border-b-gray-300">1 User Allowed</p>
                <p className="font-medium border-b-2 border-b-gray-300">Send up tp 20GB</p></div>
                </div>
                <button className="px-12 py-[12px] bg-[#00df9a] rounded-lg font-semibold tracking-wide">Start Trail</button>
                </div>
            </div>
        </div>
    </>)

}

export default Card