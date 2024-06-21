import React from "react";
import Analysispic from "./pic.png"

function Analytics(){
    
    return(<>
        <div className="w-full bg-white py-16 px-4 ">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Analysispic} alt="Analysis Pic" className="w-[600px] my-4"/>
                <div className="flex flex-col justify-center">
                    <p className="uppercase font-semibold tracking-wide text-[#00df9a]">data analytics dashboard</p>
                    <h1 className="font-semibold tracking-wide capitalize text-xl">manage data analytics centrally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolor quibusdam non nisi ducimus. Impedit, laborum ipsam exercitationem, beatae, iste voluptate vel fuga aliquid delectus aperiam molestiae quidem numquam velit!</p>
                    <div className="pt-6 sm:mx-auto">
                    <button className="bg-black text-[#00df9a] px-6  py-2 rounded-lg font-semibold shadow-lg">Get Details</button>
                    </div>

                </div>
            </div>
        </div>
    </>)

}
export default Analytics