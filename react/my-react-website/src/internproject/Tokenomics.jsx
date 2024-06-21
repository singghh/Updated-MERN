import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: [
      'Crowdsale investors: 80%',
      'Fondation: 20%'
    ],
    
    ticks:{
        align: 'right',
        font:"sans"
        
    },
    datasets: [{
      label: 'Dateset for Project',
      data: [260, 100],
      font:"sans",
      borderWidth:1,
      borderRadius:0,
      backgroundColor: [
        'rgba(0,130,255,255)',
        'rgb(255, 165, 0)'
      ],
      hoverOffset: 4
    }]
  };


function Tokenomics(){




    return(
        <>
        
        <div className=" pb-4 px-14 hidden md:block">
            <div className="bg-white rounded-lg px-8 pb-16 pt-8 sm:max-w-[100%] lg:max-w-[71%]" >
            <div>
                <h1 className="font-semibold tracking-normal text-2xl">Tokenomics</h1>
            </div>
            <div>
                <p className="pt-4 pb-4 text-xl font-semibold">Initial Distribution</p>
            </div>
            <div className="w-64">
            <Doughnut data={data}/>
            </div>
            
            <div className="pt-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod sapiente facere perspiciatis dolorum nostrum cupiditate quae, animi placeat totam eaque deserunt natus tempora, ut laboriosam? Corrupti quos error laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequuntur id quod. Fugit, amet expedita aspernatur alias aut, explicabo nemo illo sed iste repellendus, quae provident et? Saepe, nemo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius atque ullam exercitationem cumque laudantium, molestiae sit quaerat hic fuga consectetur nulla inventore dolor impedit eveniet sint, temporibus, obcaecati praesentium. Eos?</p>
            </div>
            </div>
        </div>

        </>
    )

}
export default Tokenomics