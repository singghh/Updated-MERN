import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import { color } from "chart.js/helpers";
// import { text } from "express";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: [
      'Ocean Pollution:2018: 75%',
      'Ocean Pollution:2019: 78%',
      'Ocean Pollution:2020: 79%',
      'Ocean Pollution:2021: 82%',
    ],
    
    ticks:{
        align: 'right',
        font:"sans",
        
    },
    datasets: [{
      label: 'Dateset for Project',
      data: [75, 78,79,82],
      font:"sans",
      borderWidth:0,
      borderRadius:0,
      backgroundColor: [
        'rgb(56, 178, 253)',
        'rgb(25, 61, 95)',
        'rgb(255, 64, 105)',
        'rgb(255, 194, 52)'
      ],
      hoverOffset: 4
    }]
  };


function Third(){
    return(
        <>
        
        <div className=" pb-4 px-14 hidden md:block bg-[#024e6e]">
            <div className="rounded-lg px-8 pb-16 pt-8 sm:max-w-[100%] lg:max-w-[71%]" >
            
            <div className="w-64">
            <Doughnut data={data}/>
            </div>
            </div>
        </div>

        </>
    )

}
export default Third

