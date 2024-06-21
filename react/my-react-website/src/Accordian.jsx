import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";

function Accordian({url,limit}){

    const [image,setImage]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);


    async function fetchImage(getUrl){
        try{
            setLoading(true);
            const response=await fetch (`${getUrl}?page=1&limit=${limit}`);
            const data=await response.json();

            if(data){
                setImage(data);
                setLoading(false);
            }
        }
        catch(e){
            setError(e.message);
            setLoading(false);
        }
    }


    useEffect(()=>{
        if(url!=="") fetchImage(url);
    },[url]);

    if(loading){
        return <div>Loading Data!please wait</div>
    }

    console.log(image);

    function handlePrevious(){
        setImage(currentSlide===0?image.length-1:currentSlide-1)
    }
    function handleNext(){
        setCurrentSlide(currentSlide===image.length-1?0:currentSlide+1)
    }

    return(<>

    <div>
    
    <BsArrowLeftCircleFill onClick={handlePrevious}/>{
        image && image.length>0?

        image.map((imagesData,index)=>{
            return(
                <img style={{width:"50px",height:"50px"}}
                className={currentSlide===index?"current-image":"HideContent"}
                key={imagesData.id}
                src={imagesData.download_url}
                ></img>
            )
        }):null
    }
    <BsArrowRightCircleFill onClick={handleNext}/>
    <span className="arrow-right" style={{display:"flex",flexDirection:"row",gap:"10px"}}>
        {
            image && image.length?
            image.map((_,index)=>
            <button
            key={index}
            onClick={()=>setCurrentSlide
            (index)}
            style={{borderRadius:"50%",border:"none",height:"10px",width:"10px", padding:"5px"}}
            className={currentSlide===index?"current-indicator":"currentUpdate"}
            ></button>
            )
            :null
        }
    </span>
</div>
    <span className="circle-indicators">
            imag
    </span>
    
    </>);

}
export default Accordian