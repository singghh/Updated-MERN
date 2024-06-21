import React, { useEffect, useState } from "react";
import BubbleChart from '@weknow/react-bubble-chart-d3';
import tableau from 'tableau-api';


function Stats(){

    const [chart1,getChart]=useState(null);
    const [chart2,getChart2]=useState(null);

    function ans2(){
        const containerDiv3=document.getElementById("stats3");
        const url3="https://public.tableau.com/views/OceanDetritus_wasteproduced-Dashboard1/Dashboard12";

        if(containerDiv3){
            const options={
                width: '1000px',
                height: '800px',
                hideTabs: true,
                hideTabs: true,
                hideToolbar: true,
                hideDownload: true, 
                hideShare: true,    
                hidePresentation: true,
               
        };
        let Viz3=new window.tableau.Viz(containerDiv3,url3,options);
        getChart2(Viz3)
    }
}
useEffect(()=>{
    ans2()
},[])

    const ans1=()=>{
        const containerDiv2=document.getElementById("stats2");
        const url2="https://public.tableau.com/views/Decomposetime/Dashboard1";

        if(containerDiv2){
            const options={
                    width: '1000px',
                    height: '790px',
                    hideTabs: true,
                    hideTabs: true,
                    hideToolbar: true,
                    hideDownload: true, 
                    hideShare: true,    
                    hidePresentation: true,
                    overflow:"hidden"
            };
        let viz1=new window.tableau.Viz(containerDiv2,url2,options);
        getChart(viz1)
        }        
    };
    useEffect(()=>{
        ans1()
    },[]);

    
    useEffect(()=>{
        const initViz=()=>{
            const containerDiv=document.getElementById("Stats1");
            const url="https://public.tableau.com/views/plastic_production/Dashboard1";

            if(containerDiv){
                const options={
                    width: '1010px',
                    height: '800px',
                    hideTabs: true,
                    // hideTabs: true,
                    hideToolbar: true,
                    hideDownload: true,
                    hideShare: true, 
                    hidePresentation: true,
                    overflow: 'hidden'
                };
                let viz=new window.tableau.Viz(containerDiv,url,options)
            }
        };

        initViz();
        
    },[])

    return(<>
    <div className="flex justify-center mt-20">
    <BubbleChart
  graph= {{
    zoom: 1,
    offsetX: -0.02,
    offsetY: -0.01,
  }}
  width={1000}
  height={800}
  padding={0} 
  showLegend={true}
  legendPercentage={20}
  legendFont={{
        family: 'Arial',
        size: 10,
        color: '#000',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 12,
        color: '#fff',
        weight: '500',
        padding:10
      }}
  labelFont={{
        family: 'sans-serif',
        size: 16,
        color: '#fff',
        weight: 'bold',
      }}
      data={[
        { label: 'Industrial Waste', value: 5 },
        { label: 'Agricultural Runoff', value: 7 },
        { label: 'Sewage Discharge', value: 8 },
        { label: 'Oil Spills', value: 2 },
        { label: 'Plastic Pollution', value: 40 },
        { label: 'Thermal', value: 3 },
        { label: 'Eutrophication', value: 6 },
        { label: 'Acidification', value: 2 },
        { label: 'Microplastics', value: 15 },
        { label: 'Heavy Metal Contamination', value: 1 },
        { label: 'Radioactive Contamination', value: 1 },
        { label: 'Pharmaceutical Pollution', value: 2 },
        { label: 'Sedimentation', value: 3 },
        { label: 'Algal Blooms', value: 5 },
        { label: 'Pathogen Contamination', value: 1 },
        
      ]}
/>
</div>

<div className="flex flex-col items-center mt-24 px-20">
<div>
    <h1 className="text-5xl font-bold">The Urgency of the Global Plastic Problem</h1>
    <p className="pt-4 text-xl pb-4">Scientists estimated that 8,300 million metric tons of plastics have been produced to date and the vast majority has ended up in our environment. Since its invention, Worldwide reliance on the disposable plastic packaging is overwhelming our planet.</p>
<div id="Stats1" className="overflow-hidden"></div>
</div>
<div className="pt-10">
    <p className="pt-4 text-xl pb-4">
While some items, like newspapers, may only take a few weeks to decompose, trash we throw away on a regular basis specially those containing plastic can take an entire lifetime, as well as the lifetime of our children, grandchildren, and great-grandchildren to decompose.</p>

<div id="stats2"></div></div>
<div className="pt-10">
    <h1 className="text-5xl font-bold">Which Countries contribute most to Plastic Pollution?</h1>
    <p className="pt-4 text-xl pb-4">Roughly 8 million tons of plastic is dumped into the world's oceans every year and the majority of this waste comes from just six countries: China, Indonesia, Philippines, Vietnam , Srilanka and Thailand.</p>
<div id="stats3"></div></div>
</div>
    </>)

}
export default Stats