import React from "react";
import logo2 from "../assets/logo2.png";
import { CiMail } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav1() {
  const [nav, setNav] = useState(false);

  function change() {
    setNav(!nav);
  }
  const navigate=useNavigate()
  function getAns(e){
    console.log(e)
    navigate("/Contact");
  }

  return (
    <>
      <div className="w-full bg-white">
        <div className="flex justify-between items-center px-5 h-20 m-auto max-w-[1440px]">
          <div className="">
            <img src={logo2} alt="Logo" className="w-[240px]" />
          </div>

          <div className="sm:hidden lg:flex items-center">
            <ul className="flex items-center">
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/" className={(e)=>e.isActive?"red":""}>About</NavLink></li>
              
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/sol" className={(e)=>{return e.isActive?"red":""}}>Plastic Solutions</NavLink>
              </li>
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">

                    <NavLink to="/Edu" className={(e)=>{return e.isActive?"red":""}}>Educational Resources</NavLink>

              </li>
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/Detect" className={(e)=>{return e.isActive?"red":""}}>Detect Plastic</NavLink>
              </li>
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/news" className={(e)=>{return e.isActive?"red":""}}>News & Updates</NavLink>
              </li>

              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/stats" className={(e)=>{return e.isActive?"red":""}}>Statistics</NavLink>
              </li>
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/Calculator" className={(e)=>{return e.isActive?"pop":""}}>Calculator</NavLink>
              </li>
              <li className="p-2.5 font-semibold text-[14px] text-slate-500 hover:cursor-pointer hover:text-[#0f39a6] tracking-wide">
                <NavLink to="/Track" className={(e)=>{return e.isActive?"red":""}}>Track Centers</NavLink>
              </li>
              
            </ul>
            <div className="px-5">
              <button className="p-3 border-none px-3.5 py-2.5 font-semibold tracking-wide text-[14px] text-[#0f39a6] bg-slate-300 rounded-3xl flex justify-center items-center gap-2 hover:text-white hover:bg-[#0F39A6] hover:scale-105 transition ease-in-out duration-200" onClick={getAns}>
                <CiMail size={20}/>
                Get In Touch
              </button>
              <div onClick={change} className="block lg:hidden">
                {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav1;
