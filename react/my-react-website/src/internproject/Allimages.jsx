import React,{useEffect, useState} from "react";


function Allimages(){

    const [image,setImage]=useState([]);

    async function getImages(){
        try{

           const response=await fetch("https://api.coingecko.com/api/v3/search/trending");
           const data=await response.json();

           if(data && data.coins){
            setImage(data.coins);
            console.log(data.coins[0].item.id)
           }
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getImages()
    },[])

    return(
        <>
        <div className="wrapper">
            <div className="context">
                
                {
                    image && image.length>0?
                    
                    
                    image.map((dI,i)=>{
                        return(
                            <div key={i}>
                                <div>
                                    <p>{dI.item.name}</p>
                                </div>
                            </div>
                        )
                    })
                    
                    :null
                }
                    
            </div>
        </div>
        </>
    )

}

export default Allimages