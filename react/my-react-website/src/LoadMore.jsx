import React, { useState,useEffect } from "react";

function LoadMore(){

    const [image,setImage]=useState([]);
    const [loading,setLoading]=useState(false);
    const [count,setCount]=useState(0);

    async function LoadData(){
        try{
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`)
            const data=await response.json();
            if(data){
                setImage((prevData)=>[...prevData,...data.products]);
                setLoading(false)
            }
        }
        catch(e){
            console.log(e)
            setLoading(false);
        }
    }

    useEffect(()=>{
        LoadData();
        setLoading(false);
    },[count]);

    if(loading){
        return <div>Loading please wait</div>
    }

    console.log(image)

    return(<>

        <div className="container">
            <div className="product-container">
                {
                    image&&image.length>0?
                    image.map((item,index)=>{
                        return(
                            <div key={index} className="product">
                            <img src={item.thumbnail}></img>
                            <p>{item.title}</p>
                            </div>    
                        )
                    }):null
                }
            </div>
            <button onClick={()=>setCount(count+1)}>Load More</button>
        </div>

    </>)

}
export default LoadMore