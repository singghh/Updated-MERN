import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


function CreatePost(){

    const navigation=useNavigate()
   

    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState("");
    const [image,setImage]=useState('')
    const [content,setContent]=useState('')
    const [display,setDisplay]=useState(false)
    const nav=useNavigate()
    
    async function prevent(e){
        const data=new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('image',image[0])
        e.preventDefault()
        
        try{
            const response=await fetch('http://localhost:3000/post',{
                method:"POST",
                body:data,
                // headers:{"Content-Type":"Application/json"}
                credentials:'include',
            })
            if(response.ok){
                setDisplay(true)
                setTimeout(()=>{
                    navigation('/FrontendLogin/Blog.jsx')
                },2000)
            }
            else{
                alert("Failed to Create Post")
            }
        }
        catch(e){
            alert("Failed to Create Post")
            console.log("Error Occured:",e)
        }
    }
    function change(){
        nav("/FrontendLogin/Blog.jsx")
    }

    return(
        <>
        
        <div className='ml-20 cursor-default' onClick={change}>
        <FaArrowLeft size={25}/>
        </div>
        
        {
            display?<p className='font-semibold w-fit pr-10 pl-10 bg-green-400 pt-1 pb-1 text-white rounded-sm'>SuccessFully Posted</p>:""
        }
        
        <div>
        <div className='m-20 p-2 rounded-lg shadow-2xl'>
        <form action="" onSubmit={prevent}>
            <div className='flex flex-col justify-center items-center gap-2 m-10'>
                <input type="text" placeholder='Title' className='border-2 w-full p-2 rounded-md' onChange={e=>setTitle(e.target.value)}/>
                <input type="text" placeholder='Summary' className='border-2 w-full p-2 rounded-md' onChange={e=>setSummary(e.target.value)}/>
                <input type="file" className='border-2 w-full rounder-2' onChange={e=>setImage(e.target.files)}/>
                <div className='w-full'><ReactQuill onChange={value=>setContent(value)}/></div>
                <button className='border-2 w-full rounded-md p-2 bg-gray-700 border-none text-white text-lg tracking-wide'>Create Post</button>
            </div>
        </form>
        </div>
        </div>
        </>
    )
}
export default CreatePost