import React,{useEffect,useState,useRef} from "react";

function MyComponent(){


    const [clock,setClock]=useState(new Date);

    useEffect(()=>{
        const change=setInterval(()=>{
            setClock(new Date)
        },1000);

        return ()=>{
            clearInterval(change)
        }
    },[])

    function formatTime(){
        let hours=clock.getHours();
        const minutes=clock.getMinutes();
        const seconds=clock.getSeconds();

        hours=hours%12||12;

        return `${hours}:${minutes}:${seconds}`
    }

    return(<>
    
<p>{formatTime()}</p>
    
    </>);

}
export default MyComponent