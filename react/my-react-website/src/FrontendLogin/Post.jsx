import React from 'react';
import waterPollution from "../assets/water_pollution.webp";
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

function Post({ _id,title, summary, image, content, createdAt,author }) {
    let formattedDate;
    console.log(image)
    console.log(author)
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

  return (
    <>
    { title && summary && image && createdAt && author && content ?
    <div className='m-20'>
      <div className='grid grid-cols-2 items-center gap-10'>
        <div>
          <img src={`http://localhost:3000/`+image} alt="Water Pollution" />
        </div>
        <div className='pt-10 pb-10'>
            <Link to={`/FrontendLogin/ReadMore/${_id}`}><h1 className='text-4xl font-bold pb-5 hover:underline underline-offset-2 cursor-pointer'>{title}</h1></Link>
          
          <div className='flex gap-3 pb-3'>
            <span className='font-semibold tracking-wide underline underline-offset-2'>{author?.AdminName || 'Unknown Author'}</span>
            <time>{formattedDate}</time>
          </div>
          <p>{summary}</p><p className='text-gray-500 underline underline-offset-2'>Read More</p>
        </div>
      </div>
    </div>:""
    }
    </>
  );
}

export default Post;
