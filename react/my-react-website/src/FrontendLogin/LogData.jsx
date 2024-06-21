import { div } from "@tensorflow/tfjs-core";
import React from "react";
import { useState } from "react";
import saynot from "../assets/saynot.webp"

function LogData({tabsContent,onChange}){
    const [currentTabIndex,setCurrentTabIndex]=useState(0)
    const [color,setColor]=useState(true)

    function handeClick(getI){
        setCurrentTabIndex(getI)
    }

    return(<>
    <div className="">
        {/* <div>
             <img src={saynot} alt="" className="w-20"/>
        </div> */}
        <div className="flex flex-col mt-28 w-[390px] ml-[600px]">
            <div className="flex">
                {
                    tabsContent.map((ans,i)=>{
                        return(
                            <div key={ans.label} onClick={()=>handeClick(i)}>
                                <div className={currentTabIndex===i?"cursor-pointer p-1 w-fit pl-5 pr-5 font-semibold bg-[#00aa9e] text-white":"cursor-pointer p-1 w-fit pl-5 pr-5 font-semibold"}>{ans.label}</div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="border-t-4 border-t-[#00aa9e] shadow-md border-r-2 border-l-2">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    </div>
    </>)
}
export default LogData