import React, { useEffect } from 'react';
import { useState } from 'react';
import {format} from 'date-fns/format';
import Post from './Post';

function Content(){
    const [post,setPost]=useState([])
    async function getData(){
        try{
            const response=await fetch("http://localhost:3000/post");
            const data=await response.json();
            setPost(data)
            console.log(post)
            console.log(post.length)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{getData()},[])


    return(
        <>
            
                    {   
                        
                        post.length>0 && post.map((display,index)=>(
                            
                            <Post {...display}/>
                            
                        ))
                    }
                
        </>
    )
}
export default Content

                            {/* <div className='flex' key={index}>
                                    
                                    <div>
                                    <img src={display.image} alt="" />
                                    </div>
                                    <div>
                                    <p>{display.title}</p>
                                    <p>{display.author.AdminName}</p>
                                    <time>{format(new Date(display.createdAt),'MMM d,yyyy HH:mm')}</time>
                                    <p>{display.summary}</p>
                                    </div>
                            </div> */}