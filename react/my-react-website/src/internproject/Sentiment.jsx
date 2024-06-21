import React, { useEffect, useState } from "react";
import data from "./data.js";
import { IoIosInformationCircle } from "react-icons/io";

import { MdNavigateNext } from "react-icons/md";



function Sentiment(){

    const [answer,setAnswer]=useState();
    const [buy,setBuy]=useState(80);
    const [hold,setHold]=useState(10);
    const [sell,setSell]=useState(10);
    const [green,setGreen]=useState("#000000");

    function greatestAmong(a,b,c){
        if((a>b)&&(a>c)){
            setGreen("#ebf9f4");
            return a;

        }
        else if((b>c) && (b>a)){

            return b;

        }
        else{

            return c;

        }
    }
    useEffect(()=>{
        const ans=greatestAmong(buy,hold,sell);
        setAnswer(ans);
    },[])

    
    return(
        <>

    <div className="pt-1 py-4 md:px-14 px-4">
        <div className="bg-white rounded-xl pl-8 sm:max-w-[100%] lg:max-w-[71%] relative pt-8">
            <h1 className="text-3xl font-semibold tracking-wide">Sentiments</h1>
            <div className="flex gap-2 items-center pt-4">
            <h2 className="text-xl">Key Events</h2><IoIosInformationCircle size={24}/></div>

            <div className="boxes flex items-center gap-4 pt-6 pb-4 overflow-x-hidden">
            <div className="absolute right-6 bg-white rounded-[50%]">
            <MdNavigateNext size={30} color="#757779"/>
            </div>
                {
                    data && data.length>0?
                    
                    data.map((dataItems,index)=>{
                        return(

                            <div key={index} className="box">

                                <div className="example flex gap-5 rounded-lg bg-[#ebf9f4] w-[460px] p-4">
                                    <div>
                                        <img src={dataItems.url} alt="" className="w-36 h-12 rounded-[50%]"/>
                                    </div>
                                    <div>
                                        <p className="pb-4 font-medium">{dataItems.question}</p>
                                        <p>{dataItems.answer}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })

                    :<div>Null</div>
                }
                
            </div>
            

            <div className="flex items-center gap-2 pt-7">
            <h1 className="text-xl font-semibold">Analyst Estimates</h1><IoIosInformationCircle size={24}/>
            </div>
            
            <div className="pt-16 flex items-center md:gap-28 pb-14 gap-5 max-w-[60%]">
                <div>
                <div className="md:w-40 md:h-40 flex justify-center items-center rounded-[50%] bg-[#ebf9f4] w-28 h-28">
                        <h1 className="md:text-5xl text-3xl font-semibold text-[#00b386]">{answer+"%"}</h1>
                </div>
                </div>
                <div className="flex flex-col gap-3">
                <div className="flex md:gap-8 gap-4 items-center w-fit">
                    <p className="md:text-xl tracking-wide text-gray-600 font-semibold">Buy</p>
                    <div className="flex items-center gap-2 max-w-28 md:max-w-[100%]">
                    <div className="rounded-sm bg-[#00b386] h-2 flex" style={{width:buy+"px"}}></div>
                    <p className="md:text-xl tracking-wide text-gray-600 font-semibold">{buy+"%"}</p></div>
                </div>

                <div className="flex md:gap-8 gap-4 items-center w-fit">
                    <p className="md:text-xl tracking-wide text-gray-600 font-semibold">Hold</p>
                    <div className="flex items-center gap-2 max-w-28 md:max-w-[100%]">
                    <div className="rounded-sm bg-[#c7c8ce] h-2" style={{width:hold+"px"}}></div>
                    <p className="md:text-xl tracking-wide text-gray-600 font-semibold">{hold+"%"}</p></div>
                </div>

                <div className="flex md:gap-8 gap-4 items-center w-fit">
                    <p className="md:text-xl tracking-wide text-gray-600 font-semibold">Sell</p>
                    <div className="flex items-center gap-2 max-w-28  md:max-w-[100%]">
                    <div className="rounded-sm bg-[#f7324c] h-2" style={{width:sell+"px"}}></div>
                    <p className="md:text-xl tracking-wide text-gray-600 font-semibold">{sell+"%"}</p></div>
                </div>

            </div>
            </div>
            
        
            </div>

            </div>
        
        </>
    )

}

export default Sentiment