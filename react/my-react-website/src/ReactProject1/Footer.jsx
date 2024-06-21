import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";

function Footer(){

    return(<>

    <div className="text-white p-20">
        <div className="grid lg:grid-cols-2 mx-auto max-w-[1240px] gap-16 justify-center items-center ">

            <div className="">
                <h1 className="text-3xl text-[#00df9a] font-semibold tracking-wide">REACT.</h1>
                <div>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat, corrupti suscipit neque ab, nam officia, consectetur similique adipisci nulla inventore distinctio fuga cumque dolorem velit. Omnis expedita velit accusantium.</p></div>
                <div className="flex gap-4 pt-6">
                <FaSquareFacebook size={30}/><FaInstagram size={30}/><FaGithub size={30}/><FaSquareXTwitter size={30}/><FaSquareThreads size={30}/></div>  
            </div>
            <div className="lg:ml-10">
            <div className="grid grid-cols-3 justify-between items-center gap-12">
            <div>
                <ul className="list-none text-slate-500 font-semibold tracking-wide leading-7">
                    <li className="text-[19px]">Solution</li>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>
            <div>
                <ul className="list-none text-slate-500 font-semibold tracking-wide leading-7">
                    <li className="text-[19px]">Support</li>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
            </div>
            <div>
                <ul className="list-none text-slate-500 font-semibold tracking-wide leading-7 mt-3">
                    <li className="text-[19px] cursor-pointer">Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    </div>
    </>)

}

export default Footer

