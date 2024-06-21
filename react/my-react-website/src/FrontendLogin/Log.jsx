import React, { useState } from "react";
import LogData from "./LogData"
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Navigate } from "react-router-dom";
import Blog from "./Blog"
import { useNavigate } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'




function Log(){
    
    function Tab1(){

        const [userLoginName,setUserLoginName]=useState("");
        const [userLoginPassword,setUserLoginPassword]=useState("")
        const navigate2=useNavigate()


        async function Login(e){
            e.preventDefault()
            try{
            const response=await fetch('http://localhost:3000/Login',{
                method:'POST',
                body:JSON.stringify({userLoginName,userLoginPassword}),
                headers:{'Content-Type':'application/json'},
                credentials:'include',
            })
            if(response.ok){   
                navigate2('/FrontendLogin/Blog.jsx')
            }
            else{
                alert("Login Failed")
            }
            }
            catch(e){
                alert("Something went Wrong")
            }
        }


        
        return <>
            <div>
                <form onSubmit={Login}>   
                    <div className="flex flex-col h-96 items-center justify-center">
                        <p className="text-3xl p-5 font-semibold">Welcome !</p>
                    <span className="p-4 flex items-center">
                        <span className="pr-2"><FaRegUser size={18}/></span>
                        <input type="text" className="border-2 border-t-0 border-r-0 border-l-0 pl-2 pt-2 pb-2 bg-transparent bg-white" name="username" placeholder="UserName" onChange={e=>setUserLoginName(e.target.value)}/>
                    </span>
                    <span className="p-4 flex items-center">
                        <span className="pr-2"><RiLockPasswordLine size={18}/></span>
                        <input type="password" className="border-2 border-t-0 border-r-0 border-l-0 pl-2 pt-2 pb-2 bg-transparent bg-white" name="password1" placeholder="Password" onChange={e=>setUserLoginPassword(e.target.value)}/>
                    </span>
                    <div className="pt-10 pb-10">
                    <span className="border-2 pr-14 pl-14 pt-2 pb-2 bg-[#00aa9e] border-none text-xl text-[white] font-semibold cursor-pointer">
                        <input type="submit" value="Click to Login" className="cursor-pointer"/>
                    </span>
                    </div>
                    </div>
                </form>
            </div>
        </>
    }
    function Tab2(){
        
        
        const navigate1=useNavigate()
        const [registertaion,setRegisteration]=useState(false)
        const [registerFailed,setRegistrationFailed]=useState(false)

        const [errors,setErrors]=useState({
            username:true,
            email:true,
            password:true,
        })

        const [AdminName,setChange]=useState("")
        const [AdminMail,setEmailChange]=useState("")
        const [Password,setPasswordChange]=useState("")

        function UserName(e){
            setChange(e.target.value)
        }
        function emailName(e){
            setEmailChange(e.target.value);
        }
        function passName(e){
            setPasswordChange(e.target.value);
        }
        
        async function val(e){
            e.preventDefault()
            try{
                const response=await fetch('http://localhost:3000/register',{
                    method:"POST",
                    body:JSON.stringify({AdminName,AdminMail,Password}),
                    headers:{"Content-Type":"application/json"},
                })
                if(response.ok){
                    
                    setRegisteration(true)
                    navigate1('')
                    setRegistrationFailed(false)
                    setTimeout(()=>{
                        navigate1('/')
                    },4000)
                }
                else{
                    setRegisteration(false)
                    setRegistrationFailed(true)
                }
                }
                catch(e){
                    alert("Registration Failed")
                    setRegisteration(false)
                }      
            // setErrors({
            //     username:/^[a-zA-Z0-9_]{4,15}$/.test(AdminName),
            //     email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(AdminMail),
            //     password:/^(?=.*[0-9])(?=.*[!@#$%^&/!_*])[a-zA-Z0-9!@#/$%^&_*]{6,16}$/.test(Password)
            // })
            
        }
        
       
        const {username,email,password}=errors
        

        

            
        
        
        return <>
            {
                registertaion?<p className="absolute top-2 right-1 p-1 text-md font-semibold flex text-white bg-[#6ab96a] gap-2 rounded-sm items-center">Redirecting to Home Page 
                <TailSpin
visible={true}
  height="20"
  width="20"
  color="#ffffff"
  ariaLabel="tail-spin-loading"
  radius="2"
  wrapperStyle={{}}
  wrapperClass=""/></p>:""
            }
            {
                registerFailed?<p className="absolute top-2 right-1 p-2 text-xl font-semibold flex text-white bg-[#cc5d72] gap-2 rounded-sm">Registration Failed</p>:""
            }
            
            <div>
                <form className="register" onSubmit={val}>   
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold text-center pt-8 pb-5">Want to Join 🎉</p>
                    
                    <span className="p-4 flex items-center">
                        <span className="pr-2"><FaRegUser size={18}/></span>
                        <div className="flex flex-col"> 
                        <input type="text" className="border-2 border-t-0 border-r-0 border-l-0 pl-2 pt-2 pb-2 bg-transparent bg-white" name="username" placeholder="UserName" onChange={UserName}/>
                        {!username && <p className="text-[10px] pt-2 text-red-500">*UserName must Contain 8-30 characters</p>}
                        
                        </div>
                    </span>

                    <span className="p-4 flex items-center">
                        <span className="pr-2"><HiOutlineMail size={18}/></span>
                        <div className="flex flex-col">
                        <input type="email" className="border-2 border-t-0 border-r-0 border-l-0 pl-2 pt-2 pb-2 bg-transparent bg-white" name="email" placeholder="Email" onChange={emailName}/>
                        {!email && <p className="text-[10px] pt-2 text-red-500">*Invalid Email Address</p>}
                        </div>
                    </span>

                    <span className="p-4 flex items-center">
                        <span className="pr-2"><RiLockPasswordLine size={18}/></span>
                        <div>
                        <input type="password" className="border-2 border-t-0 border-r-0 border-l-0 pl-2 pt-2 pb-2 bg-transparent bg-white" name="password1" placeholder="Password" onChange={passName}/>
                        {!password && <p className="text-[10px] pt-2 text-red-500">*Password must contain a special character</p>}
                        </div>
                    </span>

                    <div className="pt-10 pb-10">

                    <span className="border-2 pr-14 pl-14 pt-2 pb-2 bg-[#00aa9e] border-none text-xl text-[white] font-semibold cursor-pointer">
                        <input type="submit" value="Click to SignUp" className="cursor-pointer"/>
                    </span>
                    </div>

                    </div>
                </form>
            </div>
        </>
    }

    const tabs=[
        {
            label:"Login",
            content:<Tab1></Tab1>
        },
        {
            label:"SignUp",
            content:<Tab2></Tab2>
        }
    ]
    function change(i){
        console.log(i)
    }
    return(
        <>
            <LogData tabsContent={tabs} onChange={change}></LogData>
        </>
    )

}
export default Log