import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink,Link } from "react-router-dom";
function Head(){

    
    
    return(<>
    <div>
    <p className="text-white text-center p-2 font-semibold bg-black">Join the Fight Against Plastic Waste 💧<div className="absolute top-2 right-5"><button className="text-sm pr-3 pl-3 pt-0.5 pb-0.5 rounded-sm bg-slate-200 text-black tracking-wide text-center"><Link to="/FrontendLogin/Log.jsx">Login</Link></button></div></p>
    </div>
    </>)

}
export default Head