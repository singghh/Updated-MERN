import { useState } from "react"

function RandomColorGenerator(){


    const [typeOfColor,settypeOfColor]=useState("hex");
    const [color,setColor]=useState("#000000");



    function generateRandomNumber(length){
        return Math.floor(Math.random()*length);
    }

    function HexColor(){
        let hex="#";
        const hexValues=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        for(let i=0;i<6;i++){
            hex+=hexValues[generateRandomNumber(hexValues.length)]
        }
        setColor(hex)
    }
    function rgbColor(){
        const r=generateRandomNumber(256);
        const g=generateRandomNumber(256);
        const b=generateRandomNumber(256);
        
        setColor(`rgb(${r},${g},${b})`);

    }

    return(<>
        <div style={{border:"2px solid black",width:"300px",height:"400px",backgroundColor:`${color}`}}>
        <h1 style={{color:"white",textAlign:"center"}}>{color}</h1>
        </div><br />
        <button onClick={()=>settypeOfColor("rgb")}>RGB color</button>
        <button onClick={()=>settypeOfColor("hex")}>Hex Color</button>
        <button onClick={typeOfColor==="hex"?HexColor:rgbColor}>Random Color Generator</button>
    </>)

}
export default RandomColorGenerator