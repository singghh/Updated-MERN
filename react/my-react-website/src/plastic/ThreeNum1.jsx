import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { color } from "chart.js/helpers";

import { useNavigate } from "react-router-dom";


ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: [
    '2018: 75%',
    '2019: 78%',
    '2020: 79%',
    '2021: 82%',
  ],
    ticks:{
        align: 'right',
        font:"sans",
    },
    datasets: [{
      label: 'Ocean Pollution',
      data: [75, 78, 79, 82],
      font: "sans",
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: [
        'rgb(56, 178, 253)',
        'rgb(25, 61, 95)',
        'rgb(255, 64, 105)',
        'rgb(255, 194, 52)'
      ],
      hoverOffset: 4
    }]
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right'
      }
    },
    labels: {
      color: 'white',
      font: {
        size: 12
      }
    },
    layout: {
      padding: {
        left: 5,
        right: 1,
        top: 1,
        bottom: 1
      }
    },
  };

 

  

function Tokenomics(){
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("./stats");
  }
    return(
        <>
        
        <div className="h-screen bg-[#024e6e] flex items-center justify-around flex-wrap sm:flex-none">
            <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
            <Doughnut data={data} options={options}/>
            </div>
            
            <div>
              
                <h1 className="text-7xl text-white w-[500px] font-bold">Pollution Threaten the World</h1>
                <p className="text-white text-xl w-[500px] pt-8 pb-5">The escalating pollution in our oceans is a dire issue that demands immediate attention. The millions of tons of plastic waste are not only hazardous to marine life but also pose a significant threat to the overall health of our planet. These pollutants disrupt delicate ecosystems, harm countless aquatic species, and eventually make their way into the human food chain, leading to a myriad of health problems.</p>
                
                <button className="bg-[#f78c78] p-3 text-center text-lg" onClick={handleClick}>More Details</button>
            </div>
        </div>
        
          
        

        </>
    )

}
export default Tokenomics