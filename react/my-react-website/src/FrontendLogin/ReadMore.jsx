import React from 'react';
import pic from "../assets/water_pollution.webp"
import stripHtml from "string-strip-html";
import format from 'date-fns/format';
import { formatDate } from 'date-fns/format';

function ReadMore({content,image,title,createdAt,author}){

    let formattedDate;
  try {
    const date = new Date(createdAt);
    if (isNaN(date)) {
      throw new Error('Invalid date');
    }
    formattedDate = format(date, 'MMM d, yyyy HH:mm');
  } catch (error) {
    console.error('Error formatting date:', error);
    formattedDate = 'Invalid date';
  }
    
    return<>
    { content && image && title && createdAt?
        <div className='mt-14'>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col items-center pb-2 text-center'>
                <h1 className='text-4xl pb-2 font-bold'>{title?title:"No Title"}</h1>
                <p className='text-sm tracking-wider text-gray-400 pb-2 font-semibold'>{formattedDate}</p>
                <div>
                <span className='text-gray-600'>Written By - </span><span className='font-semibold'>{author.AdminName}</span></div>
                </div>
                <div className='flex justify-center h-[510px]'>
                <img src={`http://localhost:3000/`+image} alt="" />
                </div>
                <p className='text-center ml-20 mr-20 pt-10 pb-10 text-xl'>{stripHtml(`${content}`)}</p>
                
            </div>
        </div>:""
    }
    </>
}
export default ReadMore