import React,{useState,useEffect} from "react";

function Images(){

    const [images,setImages]=useState([])

    async function hello(){
        

        try{
            const response=await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const data=await response.json();
            setImages(data);
            console.log(data);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        hello()
    },[])

    return(<>
    
       <div>
        {
            images.length>0?
            images.map((item,i)=>{
                return(
                    <div>
                    {
                        <img src={item.url} alt="" />
                    }
                </div>
                )
            })
            :null
        }
       </div>
    
    </>)

}
export default Images;