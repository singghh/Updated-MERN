import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

function TrendingCoins(){

    const [trending,setTrending]=useState([]);

    async function getData(){
        try{

            const response=await fetch("https://api.coingecko.com/api/v3/search/trending");
            const data=await response.json();



            if(data){
                const answers=data.coins;
                const emptyArray=[];
                for(let i=0;i<=answers.length;i++){
                    if(i<3){
                        emptyArray.push(answers[i]);
                    }
                }
                setTrending(emptyArray);
            }
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
        
            <div className="p-6 bg-white rounded-lg w-[355px] hidden lg:block">
                <h1 className="font-semibold text-2xl tracking-wide">Trending Coins (24h)</h1>
                <div className="pt-4">
                    {
                        trending && trending.length>0?
                        
                        trending.map((dataItems,index)=>{
                            return(
                                <div key={index}>
                                    <div  className="flex gap-4 p-2 items-center">
                                        <img src={dataItems.item.thumb} alt={dataItems.item.name} className="rounded-[50%] w-8"/>
                                        <div className="flex gap-4 items-center"> 
                                        <h1 className="font-semibold text-[16px]">{dataItems.item.name} ({dataItems.item.symbol})</h1>
                                        <div className="font-semibold bg-[#ebf9f4] rounded-md flex items-center justify-around px-2"><BiSolidUpArrow color="#00b386" size={10}/><p className="text-[#00b386] p-1 text-[15px]">{`${dataItems.item.data.price_change_percentage_24h.aed}`.substring(0,4)}%</p></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        :<div>Null</div>
                    }
                </div>
            </div>
        
        </>
    )

}
export default TrendingCoins