import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const SportsNews = ({sportsNewsItem}) => {

    const {_id,author,title,image_url}=sportsNewsItem;

    const navigate=useNavigate();
    console.log(_id);
    const handleViewNewsDetails=()=>{
        navigate(`/news/${_id}`);
    }
    return (
        <div className='space-y-2 cursor-pointer' onClick={handleViewNewsDetails} >
            <img className='w-full max-h-60 object-cover object-top rounded-2xl' src={image_url} alt="" />
            <h3 className='text-xl font-medium line-clamp-2' >{title}</h3>
            <div className='flex flex-nowrap justify-between  '>
                <p>Sports</p> <p className='justify-center item-center flex gap-1'><BiCalendar className='text-lg'/>{author.published_date}</p>
            </div>
        </div>
    );
};

export default SportsNews;