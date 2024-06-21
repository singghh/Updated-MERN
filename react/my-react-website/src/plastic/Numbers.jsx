import React from "react";
import CountUp from 'react-countup';

function Numbers(){
    return(<>
    <div className="bg-[#0b4867] flex justify-around">
        <div className="flex items-center flex-col gap-4">
            <div>
               <CountUp start={0} end={400}
               duration={120}
               separator=" "
               suffix= "M"
               className="text-[#00df9a] text-6xl font-bold"/>
            </div>
            <p className="text-xl font-semibold text-white">Tons of plastic per year around World.</p>
        </div>
        <div className="flex items-center flex-col gap-4">
            <div>
               <CountUp end={8} 
               duration={120}
               separator=","
               suffix= "M"
               className="text-[#00df9a] text-6xl font-bold py-8"/>
            </div>
               <p className="text-xl font-semibold text-white w-96 text-center">Tons of plastic end up world’s oceans every 12 months</p>
        </div>
        <div className="flex items-center flex-col gap-4">
            <div>
            <div>
            <CountUp end={1500} 
               duration={40}
               separator=","
               suffix= ""
               className="text-[#00df9a] text-6xl font-bold py-8"/></div>
            </div>
               <p className="text-xl font-semibold w-96 text-center text-white">Plastic bottles are thrown away every second of every day.</p>
        </div>
     </div>   
    </>)
}
export default Numbers