import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Cryptocurrencies(){

    return(<>
    
        <div className="w-full mt-4">
            <div className="flex max-w-[1440px] m-auto px-4">
                <h1 className="tracking-wide">Cryptocurrencies</h1>&nbsp;
                <MdOutlineKeyboardDoubleArrowRight size={26}/>
                <h1 className="font-semibold tracking-wide">Bitcoin</h1>
            </div>
        </div>
    
    </>)

}

export default Cryptocurrencies