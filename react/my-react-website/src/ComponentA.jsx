import React,{useState,useEffect} from "react"; 


function ComponentA(){

    const [money,setMoney]=useState([]);

    async function getData(){

        try{
        const response=await fetch("https://api.coingecko.com/api/v3/search/trending");
        const data=await response.json();

        if(data){
            setMoney(data.coins);
            console.log(data)
            console.log(money.length)
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
        <div>
            <div>
                {
                    money && money.length>0?
                    
                    (money.map((item,index)=>{
                        return(
                            <div className="" key={index}>
                                <div>
                                    <h1>{item.item.name}</h1>
                                </div>
                            </div>
                        )
                    }))
                    
                    :null
                }
            </div>
        </div>);
        
}

export default ComponentA