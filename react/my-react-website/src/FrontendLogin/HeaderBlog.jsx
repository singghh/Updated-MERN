import React, { useEffect, useState } from 'react';
import logo2 from "../assets/logo2.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function  HeaderBlog(){
    const navigator=useNavigate()
    function send(){
        
        navigator('/FrontendLogin/CreatePost.jsx')
    }
    

    useEffect(()=>{

        fetch('http://localhost:3000/profile',{
            credentials:'include'
        })

    },[])
    function Logout(){
        fetch('http://localhost:3000/Logout',{
            credentials:'include',
            method:"POST"
        })
    }

    return (<>
    <header className='flex items-center justify-between mt-8 ml-10 mr-10 mb-8'>
        <div className='mb-2 ml-4'>
        <Link to="/FrontendLogin/Blog.jsx"><img src={logo2} alt="" className='w-52'/></Link>
        </div>
        <nav className='mr-10'>
            <ul className='flex gap-3 items-center'>
                <li className='font-semibold cursor-pointer' onClick={send}>Write Article</li>
                <a className='font-semibold cursor-pointer' onClick={Logout} href='/'>Logout</a>
            </ul>
        </nav>
    </header>
    </>);
}
export default HeaderBlog