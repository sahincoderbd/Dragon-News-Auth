import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { BiStar } from 'react-icons/bi';
import { BsEye, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


const HomeNewsItem = ({ newsItem }) => {
    console.log(newsItem);
    const {_id, title, author, image_url, details,rating,total_view
    } = newsItem;


    return (
        <div className='border border-[#E7E7E7] dark:border-gray-600 rounded-md space-y-2'>
            <div className='bg-[#F3F3F3] dark:bg-gray-600 flex justify-between p-6 rounded-t-md'>
                <div className='flex gap-2'>
                    <img className='w-13 rounded-full' src={author.img} alt={author.name} />
                    <div>
                        <h4 className='font-bold text-base text-[#403F3F] dark:text-white'>{author.name || 'Sarah'}</h4>
                        <p className='text-[#706F6F] dark:text-white'>{author.published_date
                        }</p>
                    </div>
                </div>
            </div>

            <div className='p-6 space-y-3'>
                <h2 className='text-lg md:text-xl font-bold'>{title}</h2>
                <img className='w-full' src={image_url
                } alt={title} />
                <p className='text-[#706F6F] dark:text-white line-clamp-4 text-base' >{details}</p>
                <Link key={_id} to={`/news/${_id}`} className=' font-medium text-[#FF8C47] '>Read More</Link>

                <hr className='border border-[#E7E7E7] dark:border-gray-600 my-4' />

                <div className='flex justify-between'>
                    <div className="flex gap-2 items-center">
                    <Rating value={rating.number} readOnly cancel={false}
                    onIcon={<BsStarFill className='text-[#FF8C47] text-xl'/>}
                    offIcon={<BsStarHalf className='text-[#FF8C47] text-xl'/>}
                    /> <span className='font-medium text-base text-[#706F6F] dark:text-white '>{rating.number}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <BsEye/>
                    <span className='font-medium text-base text-[#706F6F] dark:text-white '>{total_view}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeNewsItem;