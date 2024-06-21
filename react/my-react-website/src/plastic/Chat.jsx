import React, { useState } from "react";
import {AiChat} from '@nlux/react';
import {useChatAdapter} from '@nlux/langchain-react';
import '@nlux/themes/nova.css';
import { MdCancel } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";

function Chat(){

    const adapterOptions= {
        url: 'https://pynlux.api.nlux.ai/pirate-speak'
    };
    const langServeAdapter = useChatAdapter(adapterOptions);

    const [show,getShow]=useState(false);
    // const [Cancel,DontCancel]=useState(true)

    function blockShow(){
        getShow(true)
    }
    function Dont(){
        getShow(false);
        // DontCancel(true);
    }

    return(<>
    <div className={show===true?"block transition ease-in-out delay-700 duration-200":"hidden"}>
    
        <div className="">
        <MdCancel size={28} onClick={Dont} className="absolute right-[365px] cursor-pointer top-52 w-fit"/></div>
    
   
    <div className="chat">
    <AiChat
            adapter={langServeAdapter}
            promptBoxOptions={{
                placeholder: 'How can I help you today?'
            }}
        />
    </div>
    </div>
    <div className={show==true?"hidden":"block"}>
    <span class="fixed flex h-3 w-3 right-3 bottom-16">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
  </span>
  
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
    
  </span>
  
</span>
</div>
<RiRobot2Fill size={40} className={show===true?"hidden":"fixed right-4 top-[680px] bg-black p-2 rounded-[50%] cursor-pointer block z-50 "} color="white" onClick={blockShow} />
    
    </>)

}
export default Chat