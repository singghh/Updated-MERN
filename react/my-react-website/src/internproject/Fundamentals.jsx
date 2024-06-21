import React, { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";


function Fundamentals(){

    const [fund,setFund]=useState([]);
    const EmptyArray=[];

    async function getData(){

        try{

            const response=await fetch("https://api.coingecko.com/api/v3/search/trending");
            const data=await response.json();
            

            let dataDeep=data.coins;
            for(let i=0;i<15;i++){
                if(dataDeep[i].item.name==="GALA"){
                    EmptyArray.push(dataDeep[i]);
                    setFund(EmptyArray);
                    console.log(fund);
                }
            }
           
        }
        
        
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <>
            
            <div className="pt-4 py-4 md:px-14 px-4">
                <div className="bg-white p-3 sm:max-w-[100%] lg:max-w-[71%] rounded-lg">
                <div>
                <div>
                    <h1 className="text-2xl tracking-wide font-semibold">Performance</h1>
                </div>

                <div className="flex items-center gap-6 pt-10 pb-9">
                    <div><p>Today's Low</p>
                        <p className="font-medium pt-2">46,9302.22</p></div>
                    <div>
                        <div className="colorBox lg:w-[500px] w-28 sm:w-[400px]"></div>
                    </div>
                    <div><p>Today's High</p>
                        <p className="font-medium pt-2">46,9302.22</p></div>
                </div>

                <div className="flex items-center gap-6 pb-9">
                    <div><p>Today's Low</p>
                        <p className="font-medium pt-2">46,9302.22</p></div>
                    <div>
                        <div className="colorBox lg:w-[500px] w-28 sm:w-[400px]"></div>
                    </div>
                    <div><p>Today's High</p>
                        <p className="font-medium pt-2">46,9302.22</p></div>
                </div>


            </div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl font-semibold tracking-wide">Fundamentals</h1>
                        <IoIosInformationCircle size={24} color="#757779"/>
                    </div>
                    <div>
                        {
                            fund&&fund.length>0?
                            
                            fund.map((dataItems,index)=>{
                                return(
                                    <div key={index}  className="flex justify-between flex-wrap">
                                <div>
                                    <div className="flex sm:gap-40 gap-20 items-center border-b-2 pb-3 pt-8 w-fit justify-around max-w-[100%]">
                                        <p className="text-[12px] tracking-wide font-semibold text-[#757779] sm:text-[18px]">Dexcheck Price</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold ">{dataItems.item.data.price}</p>
                                    </div>

                                    <div className="flex sm:gap-40 gap-20 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Market Cap</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.market_cap}</p>
                                    </div>

                                    <div className="flex sm:gap-20 gap-6 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Market Cap BTC</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.market_cap_btc}</p>
                                    </div>

                                    <div className="flex sm:gap-20 gap-2 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Price BTC</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.price_btc}</p>
                                    </div>

                                    <div className="flex sm:gap-20 gap-20 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Market Cap</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.market_cap}</p>
                                    </div>
                                    </div>
                                    <div>

                                    <div className="flex sm:gap-20 gap-20 items-center border-b-2 pb-3 pt-8 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Total Volume</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.total_volume}</p>
                                    </div>

                                    <div className="flex sm:gap-20 gap-6 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Total Volume BTC</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.total_volume_btc}</p>
                                    </div>

                                    <div className="flex sm:gap-44  gap-20 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Market Cap Rank</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">#{dataItems.item.market_cap_rank}</p>
                                    </div>

                                    <div className="flex sm:gap-[265px] gap-32 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Symbol</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.symbol}</p>
                                    </div>

                                    <div className="flex sm:gap-40 gap-20 items-center border-b-2 pb-3 pt-3 w-fit">
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold text-[#757779]">Market Cap</p>
                                        <p className="text-[12px] sm:text-[18px] tracking-wide font-semibold">{dataItems.item.data.market_cap}</p>
                                    </div>
                                        
                                    </div>
                                </div>
                                )
                            })
                            
                            :<div>Null</div>
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default Fundamentals