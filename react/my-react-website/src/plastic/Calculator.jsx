import React from "react";
import { useState } from "react";
import Chart from 'chart.js/auto';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import {Pie} from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function Calculator(){
  
  const [plasticBottle,setPlaticBottle]=useState("");
  const [plasticCups,setplasticCups]=useState("");
  const [straws,setStraws]=useState("");
  const [cottonSwabs,setCottonSwabs]=useState("");
  const [cigaretteButts,setCigaretteButts]=useState("");
  const [Bags,setBags]=useState("");
  const [plasticClingWrap,setplasticClingWrap]=useState("");
  const [plasticSilverware,setPlasticSilverware]=useState("");
  const [plasticStirrers,setPlasticStirrers]=useState("");
  const [foodContainers,setFoodContainers]=useState("");



  const [plasticBottle1,setPlaticBottle1]=useState("");
  const [plasticCups1,setplasticCups1]=useState("");
  const [straws1,setStraws1]=useState("");
  const [cottonSwabs1,setCottonSwabs1]=useState("");
  const [cigaretteButts1,setCigaretteButts1]=useState("");
  const [Bags1,setBags1]=useState("");
  const [plasticClingWrap1,setplasticClingWrap1]=useState("");
  const [plasticSilverware1,setPlasticSilverware1]=useState("");
  const [plasticStirrer1,setPlasticStirrers1]=useState("");
  const [foodContainers1,setFoodContainers1]=useState("");

  const [plasticBottle3, setPlaticBottle3] = useState("15gm");
  const [plasticCups3, setplasticCups3] = useState("7gm");
  const [straws3, setStraws3] = useState("1gm");
  const [cottonSwabs3, setCottonSwabs3] = useState("0.5gm");
const [cigaretteButts3, setCigaretteButts3] = useState("0.15gm");
const [Bags3, setBags3] = useState("7gm");
const [plasticClingWrap3, setplasticClingWrap3] = useState("0.5gm");
const [plasticSilverware3, setPlasticSilverware3] = useState("15gm");
const [plasticStirrer3, setPlasticStirrers3] = useState("0.75gm");
const [foodContainers3, setFoodContainers3] = useState("10gm");



  const [plasticBottle2,setPlaticBottle2]=useState("");
  const [plasticCups2,setplasticCups2]=useState("");
  const [straws2,setStraws2]=useState("");
  const [cottonSwabs2,setCottonSwabs2]=useState("");
  const [cigaretteButts2,setCigaretteButts2]=useState("");
  const [Bags2,setBags2]=useState("");
  const [plasticClingWrap2,setplasticClingWrap2]=useState("");
  const [plasticSilverware2,setPlasticSilverware2]=useState("");
  const [plasticStirrer2,setPlasticStirrers2]=useState("");
  const [foodContainers2,setFoodContainers2]=useState("");


  const [plasticBottle4, setPlaticBottle4] = useState("");
  const [plasticCups4, setplasticCups4] = useState("");
  const [straws4, setStraws4] = useState("");
  const [cottonSwabs4, setCottonSwabs4] = useState("");
  const [cigaretteButts4, setCigaretteButts4] = useState("");
  const [Bags4, setBags4] = useState("");
  const [plasticClingWrap4, setplasticClingWrap4] = useState("");
  const [plasticSilverware4, setPlasticSilverware4] = useState("");
  const [plasticStirrer4, setPlasticStirrers4] = useState("");
  const [foodContainers4, setFoodContainers4] = useState("");


const [plasticBottle5, setPlaticBottle5] = useState("");
const [plasticCups5, setplasticCups5] = useState("");
const [straws5, setStraws5] = useState("");
const [cottonSwabs5, setCottonSwabs5] = useState("");
const [cigaretteButts5, setCigaretteButts5] = useState("");
const [Bags5, setBags5] = useState("");
const [plasticClingWrap5, setplasticClingWrap5] = useState("");
const [plasticSilverware5, setPlasticSilverware5] = useState("");
const [plasticStirrer5, setPlasticStirrers5] = useState("");
const [foodContainers5, setFoodContainers5] = useState("");

const [plasticBottle6, setPlaticBottle6] = useState("");
const [plasticCups6, setplasticCups6] = useState("");
const [straws6, setStraws6] = useState("");
const [cottonSwabs6, setCottonSwabs6] = useState("");
const [cigaretteButts6, setCigaretteButts6] = useState("");
const [Bags6, setBags6] = useState("");
const [plasticClingWrap6, setplasticClingWrap6] = useState("");
const [plasticSilverware6, setPlasticSilverware6] = useState("");
const [plasticStirrer6, setPlasticStirrers6] = useState("");
const [foodContainers6, setFoodContainers6] = useState("");

let [Total1,getTotol2]=useState(0);
let [soil1,setSoil1]=useState(0);
let [water,setWater]=useState(0);


const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const data = {
  labels: [
    'Air',
    'Water',
    'Land'
  ],
  datasets: [{
    label: 'Pollution',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }],
  ticks:{
    align: 'right',
    font:"sans",
},
};
const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      // position: 'right',
    }
  },
  labels: {
    color: 'white',
    font: {
      size: 15
    }
  },
  
};


let [showed,setShowed]=useState(false);
function show(){
  setShowed(true);
}
  
  
  function getPlasticBottle(e){
    let a1=e.target.value * 365;
    let a2=e.target.value*15*0.01;
    let a6=e.target.value*15*2;
    let a7=e.target.value*15;
    setWater(water=>water+a7);
    getTotol2(Total1=>Total1+a6);
    setSoil1(soil1=>soil1+a2);
    if(a6>=1000)
    {
      let ans5=(e.target.value*15*2)/1000+"Kg";
      setPlaticBottle6(ans5);
    }
    else
    {
      let ans6=(e.target.value*15*2)+"gm";
      setPlaticBottle6(ans6)
    }
    if(e.target.value*15>=1000){
      let ans1=(e.target.value*15)/1000+"Kg";
      let ans2=ans1.toString();
      let ans3=(e.target.value*15)/1000+" Kilolitre";
      setPlaticBottle4(ans3)
      setPlaticBottle2(ans2)
    }

    else{
      let ans4=(e.target.value*15)+"gm";
      let ans5=(e.target.value*15)+"Litre";
      setPlaticBottle4(ans5)
      setPlaticBottle2(ans4)
    }
    let a3=a2.toString().concat(" sq.m");
    setPlaticBottle5(a3)
    setPlaticBottle1(e.target.value);
    setPlaticBottle(a1);
  }
  function getPlasticCups(e){
    setplasticCups1(e.target.value);
    
    setplasticCups(e.target.value * 365);
    let a2=e.target.value*7*0.01;
    let a6=e.target.value*7*2;
    let a7=e.target.value*7;
    setWater(water=>water+a7);
    getTotol2(Total1=>Total1+a6);
    setSoil1(soil1=>soil1+a2);
    if(a6>=100)
    {
      let ans7=a6/1000+"kg";
      setplasticCups6(ans7);
    }
    else 
    {
      let ans8=a6+"gm";
      setplasticCups6(ans8);
    }
    if(e.target.value*7>=1000){
      let ans1=(e.target.value*7)/1000+"kg";
      let ans2=ans1.toString();
      let ans3=((e.target.value*7)/1000)+"kiloLitre";
      setplasticCups4(ans3);
      setplasticCups2(ans2)
    }
    else{
      let ans4=(e.target.value*7)+"gm";
      let ans5=(e.target.value*7)+"Litre";
      setplasticCups4(ans5)
      setplasticCups2(ans4)
    }
    let a3=a2.toString().concat(" sq.m");
    setplasticCups5(a3);
  }
  function getStraws(e){
    let a2=e.target.value*0.01;
    let a6=e.target.value*2;
    let a7=e.target.value
    setWater(water=>water+a7);
    getTotol2(Total1=>Total1+a6);
    setSoil1(soil1=>soil1+a2);
    setWater(water=>water+a7);
    if(a6>=1000)
    {
      let ans7=a6/1000+"kg";
      setStraws6(ans7);
    }
    else
    {
      let ans8=a6+"gm";
      setStraws6(ans8);
    }
    if(e.target.value>=1000){
      let ans1=(e.target.value)/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(e.target.value)/1000+"KiloLitre";
      setStraws4(ans3)
      setStraws2(ans2)
    }
    else{
      let ans4=(e.target.value)+"gm";
      let ans5=(e.target.value)+"Litre";
      setStraws4(ans5);
      setStraws2(ans4)
    }
    let a3=a2.toString().concat(" sq.m");
    setStraws5(a3);
    setStraws1(e.target.value)
    setStraws(e.target.value * 365);
  }
  function getcottonSwabs(e){
    let a2=e.target.value*0.5*0.01;
    let a6=e.target.value*2*0.5;
    let a7=e.target.value*0.5;
    setWater(water=>water+a7);
    setSoil1(soil1=>soil1+a2);
    getTotol2(Total1=>Total1+a6);

    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setCottonSwabs6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setCottonSwabs6(a8);
    }
    if(e.target.value*0.5>=1000){
      let ans1=(Math.round(e.target.value*0.5))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*0.5))/1000+"kiloLitre";
      setCottonSwabs4(ans3);
      setCottonSwabs2(ans2);
    }
    else{
      let ans4=(Math.round(e.target.value*0.5))+"gm";
      let ans5=(Math.round(e.target.value*0.5))+"Litre";
      setCottonSwabs4(ans5);
      setCottonSwabs2(ans4);
    }
    let a3=a2.toString().concat(" sq.m")
    setCottonSwabs5(a3);
    setCottonSwabs1(e.target.value);
    setCottonSwabs(e.target.value * 365);
  }
  function getCigaretteButts(e){
    let a2=e.target.value*1.5*0.01;
    let a6=e.target.value*1.5*2;
    let a7=e.target.value*1.5;
    setWater(water=>water+a7);
    getTotol2(Total1=>Total1+a6);
    setSoil1(soil1=>soil1+a2);
    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setCigaretteButts6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setCigaretteButts6(a8);
    }
    if(e.target.value*1.5>=1000){
      let ans1=(Math.round(e.target.value*1.5))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*1.5))/1000+"kiloLitre";
      setCigaretteButts4(ans3)
      setCigaretteButts2(ans2)
    }
    else{
      let ans4=(Math.round(e.target.value*1.5))+"gm";
      let ans5=(Math.round(e.target.value*1.5))+"Litre";
      setCigaretteButts4(ans5)
      setCigaretteButts2(ans4)
    }
    let a3=a2.toString().concat(" sq.m")
    setCigaretteButts5(a3);
    setCigaretteButts1(e.target.value);
    setCigaretteButts(e.target.value* 365);
  }
  function getPlasticClingWrap(e){
    let a2=e.target.value*0.5*0.01;
    let a6=e.target.value*0.5*2;
    let a7=e.target.value*0.5;
    setWater(water=>water+a7);
    getTotol2(Total1=>Total1+a6);
    setSoil1(soil1=>soil1+a2);
    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setplasticClingWrap6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setplasticClingWrap6(a8);
    }
    if(e.target.value*0.5>=1000){
      let ans1=(Math.round(e.target.value*0.5))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*0.5))/1000+"kiloLitre";
      setplasticClingWrap4(ans3)
      setplasticClingWrap2(ans2)
    }
    else{
      let ans4=(Math.round(e.target.value*0.5))+"gm";
      let ans5=(Math.round(e.target.value*0.5))+"Litre";
      setplasticClingWrap4(ans5)
      setplasticClingWrap2(ans4)
    }
    let a3=a2.toString().concat(" sq.m");
    setplasticClingWrap5(a3);
    setplasticClingWrap1(e.target.value)
    setplasticClingWrap(e.target.value* 365);
  }
  function getBags(e){
    let a2=e.target.value*7*0.01;
    let a6=e.target.value*7*2;
    let a7=e.target.value*7;
    setWater(water=>water+a7);
    setSoil1(soil1=>soil1+a2);
    getTotol2(Total1=>Total1+a6);
    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setBags6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setBags6(a8);
    }
    if(e.target.value*7>=1000){
      let ans1=(Math.round(e.target.value*7))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*7))/1000+"kiloLitre";
      setBags4(ans3);
      setBags2(ans2);
    }
    else{
      let a3=a2.toString().concat(" s1.m")
      let ans4=(Math.round(e.target.value*7))+"gm";
      let ans5=(Math.round(e.target.value*7))+"Litre";
      setBags4(ans5)
      setBags2(ans4)
    }
    let a3=a2.toString().concat(" sq.m");
    setBags5(a3);
    setBags1(e.target.value)
    setBags(e.target.value* 365);
  }
  function getPlasticSilverware(e){
    let a2=e.target.value*15*0.01;
    let a6=e.target.value*15*2;
    let a7=e.target.value*15;
    setWater(water=>water+a7);
    setSoil1(soil1=>soil1+a2);
    getTotol2(Total1=>Total1+a6);
    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setPlasticSilverware6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setPlasticSilverware6(a8);
    }
    if(e.target.value*15>=1000){
      let ans1=(Math.round(e.target.value*15))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*15))/1000+"KiloLitre";
      setPlasticSilverware4(ans3)
      setPlasticSilverware2(ans2)
    }
    else{
      let ans4=(Math.round(e.target.value*15))+"gm";
      let ans5=(Math.round(e.target.value*15))+"Litre";
      setPlasticSilverware4(ans5);
      setPlasticSilverware2(ans4)
    }
    let a3=a2.toString().concat(" sq.m");
    setPlasticSilverware5(a3)
    setPlasticSilverware1(e.target.value)
    setPlasticSilverware(e.target.value* 365);
  }
  function getplasticStirrers(e){
    let a2=e.target.value*0.75*0.01;
    let a6=e.target.value*0.75*2;
    let a7=e.target.value*0.75;
    setWater(water=>water+a7);
    setSoil1(soil1=>soil1+a2);
    getTotol2(Total1=>Total1+a6);
    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setPlasticStirrers6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setPlasticStirrers6(a8);
    }
    if(e.target.value*0.75>=1000){
      let ans1=(Math.round(e.target.value*0.75))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*0.75))/1000+"KiloLitre";
      setPlasticStirrers4(ans3)
      setPlasticStirrers2(ans2)
    }
    else{
      let ans4=(Math.round(e.target.value*0.75))+"gm";
      let ans5=(Math.round(e.target.value*0.75))+"Litre";
      setPlasticStirrers4(ans5)
      setPlasticStirrers2(ans4)
    }
    let a3=a2.toString().concat(" sq.m")
    setPlasticStirrers5(a3);
    setPlasticStirrers1(e.target.value)
    setPlasticStirrers(e.target.value* 365);
  }
  function getFoodContainers(e){
    let a2=e.target.value*10*0.01;
    let a6=e.target.value*10*2;
    let a7=e.target.value*10;
    setWater(water=>water+a7);
    setSoil1(soil1=>soil1+a2);
    getTotol2(Total1=>Total1+a6);
    if(a6>=1000)
    {
      let a7=a6/1000+"kg";
      setFoodContainers6(a7);
    }
    else
    {
      let a8=a6+"gm";
      setFoodContainers6(a8);
    }
    if(e.target.value*10>=1000){
      let ans1=(Math.round(e.target.value*10))/1000+"kg";
      let ans2=ans1.toString();
      let ans3=(Math.round(e.target.value*10))/1000+"KiloLitre";
      setFoodContainers4(ans3)
      setFoodContainers2(ans2)
    }
    else{
      let ans4=(Math.round(e.target.value*10))+"gm";
      let ans5=(Math.round(e.target.value*10))+"Litre";
      setFoodContainers4(ans5);
      setFoodContainers2(ans4)
    }
    let a3=a2.toString().concat(" sq.m")
    setFoodContainers5(a3)
    setFoodContainers1(e.target.value);
    setFoodContainers(e.target.value* 365);
  }

  

    return(
        <>
        
        <div className="flex justify-center mt-14 pb-10">
        <div className="bg-[#f6f8f9] flex flex-col justify-center items-center py-5 w-[700px]">
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#f37321]">CHART I</h1>
            <h1 className="font-bold text-2xl text-[#f37321]">ITEMS YOU CONSUME DAILY</h1>
            <h2 className="text-xl pt-5">Please enter the quantity for <span className="font-bold">each day:</span></h2>
          </div>
          <div className="grid grid-cols-1">
            <table class="table-auto border-separate border-spacing-8">
            <thead>
                <tr>
                    <th></th>
                    <th className="text-[#717171] font-semibold text-lg tracking-wide">DAY</th>
                    <th className="text-[#717171] font-semibold text-lg tracking-wide">YEAR</th>
                </tr>
            </thead>
            <tbody>
    <tr className="">
      <td className="text-[#08194f] text-xl font-bold">Plastic Bottles</td>
      <td><input type="text" className="w-10 text-center text-lg" onChange={getPlasticBottle}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{plasticBottle}</td>
    </tr>
    <tr className="">
      <td className="text-[#08194f] text-xl font-bold">Plastic Cups</td>
      <td><input type="text" className="w-10 text-center text-lg" onChange={getPlasticCups}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{plasticCups}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Straws</td>
      <td><input type="text" className="w-10 text-center text-lg" onChange={getStraws}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{straws}</td>
    </tr>
    <tr className="">
      <td className="text-[#08194f] text-xl font-bold">Cotton Swabs</td>
      <td><input type="text" className="w-10 text-center  text-lg" onChange={getcottonSwabs}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{cottonSwabs}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Cigarette Butts</td>
      <td><input type="text" className="w-10 text-center  text-lg" onChange={getCigaretteButts}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{cigaretteButts}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Plastic Bags</td>
      <td><input type="text" className="w-10 text-center  text-lg" onChange={getBags}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{Bags}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Plastic Cling Wrap</td>
      <td><input type="text" className="w-10 text-center  text-lg" onChange={getPlasticClingWrap}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{plasticClingWrap}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Plastic Silverware</td>
      <td><input type="text" className="w-10 text-center text-lg" onChange={getPlasticSilverware}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{plasticSilverware}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Plastic Stirrers</td>
      <td><input type="text" className="w-10 text-center text-lg" onChange={getplasticStirrers}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{plasticStirrers}</td>
    </tr>
    <tr  className="">
      <td className="text-[#08194f] text-xl font-bold">Food Containers</td>
      <td><input type="text" className="w-10 text-center text-lg" onChange={getFoodContainers}></input></td>
      <td className="text-lg text-[#08194f] font-bold">{foodContainers}</td>
    </tr>
  </tbody>
          </table>
          </div>
          <button className="bg-[#f37321] p-2 text-white" onClick={show}>Submit</button>
        </div>
        
        </div>
  <div className={showed?"block":"hidden"}>
    <div className="flex justify-center items-center my-10 gap-10"> 
        <table class="border-separate border border-slate-500 border-spacing-1">
  <thead>
    <tr>
      <th class="border border-slate-600">Items</th>
      <th class="border border-slate-600">No.of Items</th>
      <th class="border border-slate-600">Average Weight</th>
      <th class="border border-slate-600">Total Weight</th>
      <th class="border border-slate-600">Air Polluted (CO2 Emission)</th>
      <th class="border border-slate-600">Water Polluted</th>
      <th class="border border-slate-600">Soil Polluted</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700">Plastic Bottles</td>
      <td class="border border-slate-700">{plasticBottle1}</td>
      <td class="border border-slate-700">{plasticBottle3}</td>
      <td class="border border-slate-700">{plasticBottle2}</td>
      <td class="border border-slate-700">{plasticBottle6}</td>
      <td class="border border-slate-700">{plasticBottle4}</td>
      <td class="border border-slate-700">{plasticBottle5}</td>
    </tr>
    <tr>
          <td class="border border-slate-700">Plastic Cups</td>
          <td class="border border-slate-700">{plasticCups1}</td>
          <td class="border border-slate-700">{plasticCups3}</td>
          <td class="border border-slate-700">{plasticCups2}</td>
          <td class="border border-slate-700">{plasticCups6}</td>
          <td class="border border-slate-700">{plasticCups4}</td>
          <td class="border border-slate-700">{plasticCups5}</td>
    </tr>

    <tr>
          <td class="border border-slate-700">Straws</td>
          <td class="border border-slate-700">{straws1}</td>
          <td class="border border-slate-700">{straws3}</td>
          <td class="border border-slate-700">{straws2}</td>
          <td class="border border-slate-700">{straws6}</td>
          <td class="border border-slate-700">{straws4}</td>
          <td class="border border-slate-700">{straws5}</td>
    </tr>

    <tr>
          <td class="border border-slate-700">Cotton Swabs</td>
          <td class="border border-slate-700">{cottonSwabs1}</td>
          <td class="border border-slate-700">{cottonSwabs3}</td>
          <td class="border border-slate-700">{cottonSwabs2}</td>
          <td class="border border-slate-700">{cottonSwabs6}</td>
          <td class="border border-slate-700">{cottonSwabs4}</td>
          <td class="border border-slate-700">{cottonSwabs5}</td>
          
    </tr>

    <tr>
          <td class="border border-slate-700">Cigarette Butts</td>
          <td class="border border-slate-700">{cigaretteButts1}</td>
          <td class="border border-slate-700">{cigaretteButts3}</td>
          <td class="border border-slate-700">{cigaretteButts2}</td>
          <td class="border border-slate-700">{cigaretteButts6}</td>
          <td class="border border-slate-700">{cigaretteButts4}</td>
          <td class="border border-slate-700">{cigaretteButts5}</td>
        
    </tr>

    <tr>
          <td class="border border-slate-700 ">Plastic Bags</td>
          <td class="border border-slate-700">{Bags1}</td>
          <td class="border border-slate-700">{Bags3}</td>
          <td class="border border-slate-700">{Bags2}</td>
          <td class="border border-slate-700">{Bags6}</td>
          <td class="border border-slate-700">{Bags4}</td>
          <td class="border border-slate-700">{Bags5}</td>
    </tr>

    <tr>
          <td class="border border-slate-700">Plastic Cling Wrap</td>
          <td class="border border-slate-700">{plasticClingWrap1}</td>
          <td class="border border-slate-700">{plasticClingWrap3}</td>
          <td class="border border-slate-700">{plasticClingWrap2}</td>
          <td class="border border-slate-700">{plasticClingWrap6}</td>
          <td class="border border-slate-700">{plasticClingWrap4}</td>
          <td class="border border-slate-700">{plasticClingWrap5}</td>
    </tr>

    <tr>
          <td class="border border-slate-700">Plastic Silverware</td>
          <td class="border border-slate-700">{plasticSilverware1}</td>
          <td class="border border-slate-700">{plasticSilverware3}</td>
          <td class="border border-slate-700">{plasticSilverware2}</td>
          <td class="border border-slate-700">{plasticSilverware6}</td>
          <td class="border border-slate-700">{plasticSilverware4}</td>
          <td class="border border-slate-700">{plasticSilverware5}</td>
    </tr>
    <tr>
          <td class="border border-slate-700">Plastic Stirrers</td>
          <td class="border border-slate-700">{plasticStirrer1}</td>
          <td class="border border-slate-700">{plasticStirrer3}</td>
          <td class="border border-slate-700">{plasticStirrer2}</td>
          <td class="border border-slate-700">{plasticStirrer6}</td>
          <td class="border border-slate-700">{plasticStirrer4}</td>
          <td class="border border-slate-700">{plasticStirrer5}</td>
    </tr>
    <tr>
          <td class="border border-slate-700">Food Containers</td>
          <td class="border border-slate-700">{foodContainers1}</td>
          <td class="border border-slate-700">{foodContainers3}</td>
          <td class="border border-slate-700">{foodContainers2}</td>
          <td class="border border-slate-700">{foodContainers6}</td>
          <td class="border border-slate-700">{foodContainers4}</td>
          <td class="border border-slate-700">{foodContainers5}</td>
    </tr>
  </tbody>
</table>
<div className="w-[350px] h-[350px]">
        <Pie data={data} options={options}></Pie></div>
</div>
<p>Total CO2 Released: {Total1}</p>
<p>Total Soil Polluted: {soil1}</p>
{/* <p>Total Water Polluted: {water}</p> */}
</div>
      
<div>

</div>

        </>
    )

}
export default Calculator