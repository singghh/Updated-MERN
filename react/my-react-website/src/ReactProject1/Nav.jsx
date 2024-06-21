import React,{useState} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

function Nav(){
    

    const [nav,setNav]=useState(false);

    function change(){
        setNav(!nav);
    }

    return(
        <div className="text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

            <ul className="hidden md:flex list-none font-medium">
                <li className="p-4 tracking-wider hover:cursor-pointer">Home</li>
                <li className="p-4 tracking-wider hover:cursor-pointer">Company</li>
                <li className="p-4 tracking-wider hover:cursor-pointer">Resources</li>
                <li className="p-4 tracking-wider hover:cursor-pointer">About</li>
                <li className="p-4 tracking-wider hover:cursor-pointer">Contact</li> 
            </ul>
            <div onClick={change} className="md:hidden">
                {!nav?<AiOutlineMenu size={30}></AiOutlineMenu>:<AiOutlineClose size={30}></AiOutlineClose>}
            </div>
            <div className={!nav?"fixed left-[-100%]":"fixed top-0 left-0 w-[40%] border-r h-full border-r-gray-700 ease-in-out duration-500 md:hidden bg-black"}>
            <div className="text-white flex justify-between items-center h-24 mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1></div>
                <ul className="pt-20 uppercase p-4">
                <li className="p-4 tracking-wider hover:cursor-pointer border-b-[0.1px] border-b-gray-700">Home</li>
                <li className="p-4 tracking-wider hover:cursor-pointer border-b-[0.1px] border-b-gray-700">Company</li>
                <li className="p-4 tracking-wider hover:cursor-pointer border-b-[0.1px] border-b-gray-700">Resources</li>
                <li className="p-4 tracking-wider hover:cursor-pointer border-b-[0.1px] border-b-gray-700">About</li>
                <li className="p-4 tracking-wider hover:cursor-pointer border-b-[0.1px] border-b-gray-700">Contact</li>
                </ul>
            </div>
        </div>
    );

}

export default Nav