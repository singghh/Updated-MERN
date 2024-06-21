import React,{useState,useEffect} from "react";
import { BiSolidUpArrow } from "react-icons/bi";


function Converter(){

    const [money,setMoney]=useState([]);

    async function getData(){
        try{

            const response=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=3");
            const data=await response.json();
            
            if(data){
                const bitcoinData=data.bitcoin;
                const emptyArray=[];
                emptyArray.push(bitcoinData);
                setMoney(emptyArray);
                console.log(data)
            }

        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(<>

    <div>
        <div>
            {
                money && money.length>0?
                
                money.map((dataItems,index)=>{
                    return(
                        <div key={index}>
                            <div className="max-w-[1440px] m-auto px-4 pt-1">
                                <div className="flex items-center gap-5">
                                <h1 className="text-4xl tracking-wide font-bold">&#36;{`${dataItems.usd}`}</h1>
                                <div className="bg-[#a4f9db] border-none rounded-md px-2 py-1 flex items-center gap-2"><BiSolidUpArrow color="#00b386" size={10}/><p className="text-[#00b386] font-semibold text-[16px]">{`${dataItems.usd_24h_change}`.slice(0,4)}%</p></div>
                                </div>
                                <p className="text-xl tracking-wide font-semibold pt-2">&#8377; {`${dataItems.inr}`}</p>
                            </div>
                        </div>
                    )
                })
                
                :<div>Null</div>
            }
        </div>
    </div>
    
        
    
    </>)


}
export default Converter