import React, { useEffect, useState } from 'react';
import ReadMore from './ReadMore';
import { useParams } from 'react-router-dom';

export default function DataRead(){

    // const [data,getData]=useState([])
    const {id}=useParams();
    const [data,getData]=useState([])

    async function ReadData(){
        try{
            const response=await fetch(`http://localhost:3000/ReadMore/${id}`);
            const ans=await response.json()
            getData(Array(ans))
            console.log(data.length)
            console.log(data)
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{ReadData()},[])


    return(
        <>
        {data.length>0 && data.map((ans)=>(
            <ReadMore {...ans}/>
        ))}
            
        </>
    )
}
