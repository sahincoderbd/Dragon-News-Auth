import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RightSideNav from './Shared/RightSideNav';
import Header from './Header';
import { BiLeftArrow } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

const NewsDetails = () => {
    const newsDetail=useLoaderData();
    
    const [newsItem]=newsDetail;
    console.log(newsItem);

    const {details,title,image_url}=newsItem;

    return (
        <div className='py-10 space-y-4'>
        <Header></Header>
        <div className='grid grid-cols-4 gap-5  '>
            
            <div className='col-span-3 space-y-3 '>
            <h4 className='font-bold'>Dragon News</h4>
            <div className='p-4 rounded-md border-2 border-gray-300 space-y-3'>
                <img className='w-full' src={image_url} alt={title} />
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p>{details}</p>
                <Link to='/' className='btn bg-[#D72050] text-white font-normal text-lg'> <BsArrowLeft/>All news in this category</Link>
            </div>
            </div>
            <div className='col-span-1 space-y-4'>
            <h4 className='font-bold'>Login With</h4>
                <RightSideNav></RightSideNav>
            </div>
        </div>
        
        </div>
    );
};

export default NewsDetails;