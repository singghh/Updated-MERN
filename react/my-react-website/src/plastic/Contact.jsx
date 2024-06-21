import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_99nh35y', 'template_wbxipij', form.current, {
        publicKey: 'lVR4vOFAmW6MKo0eJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thanks for Reaching Us")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='flex justify-center flex-row mt-8 mb-20'>
          
          <div className='flex flex-col gap-6 bg-[#272a33] p-14 rounded-l-lg w-[430px] h-[530px]'>
            <h1 className='text-white text-3xl font-semibold pb-4'>Write Us</h1>
          <div className='flex items-center gap-4 '>
            <input type="text" name="user_name" className='w-full rounded-sm p-2 pl-2 bg-transparent border-b-2 text-white' placeholder='Name'/></div>
          <div className='flex items-center gap-4'>
            <input type="email" name="user_email" className='w-full rounded-sm p-2 pl-2 bg-transparent border-b-2 text-white' placeholder='Email'/></div>
          <textarea name="message" className='w-full rounded-sm -2 pl-2 bg-transparent border-b-2 text-white h-28' placeholder='Message'/>
          <div className=''>
          <input type="submit" value="Send Message" className='pr-6 pl-6 pt-2 pb-2 text-white bg-[#e79843] rounded-sm'/>
          </div>
          </div>
          <div className='bg-[#1d1e23] p-14 rounded-r-lg rounded-e-lg w-[430px] h-[530px]'>
            <div className='pb-8'>
            <p className=' text-white text-lg font-semibold'>Contact Information</p>
            <p className='text-gray-400 font-semibold'>We're open for any suggestion or just to have a chat</p></div>
            <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-3'> 
              <div className='w-fit p-2 rounded-[50%] bg-[#212227] '>
              <FaLocationDot size={20} color='white'/></div><p className='text-gray-400 font-semibold'><span className='font-semibold text-white'>Address : </span> TirumalaNagar Road No:09, Karimnagar, Telangana 505001</p>
            </div>
            <div className='flex items-center gap-3'>
            <div className='w-fit rounded-[50%] bg-[#212227] p-2'>
            <FaPhone size={20} color='white'/>
            </div>
            
            <p className='text-gray-400 font-semibold'><span className='font-semibold text-white'>Phone :</span> 91+8142776699</p>
            </div>
            
            <div className='flex item-center gap-3'>
            <div className='w-fit p-2 rounded-[50%] bg-[#212227] '>
            <MdEmail size={20} color='white'/></div>
            
            <p className='text-gray-400 font-semibold'><span className='font-semibold text-white'>Phone : </span>vaarunsingghh@gmail.com</p>
            </div>
            <div className='flex items-center gap-2'> 
            <div className='w-fit p-2 rounded-[50%] bg-[#212227]'>
            <SlGlobe size={20} color='white'/></div>
            <p className='text-sm'>
            <span className='text-white font-semibold'>PLASTICFOLLY.COM</span></p>
            </div>
            </div>
          </div>
      </div>
    </form>
  );
};
export default Contact