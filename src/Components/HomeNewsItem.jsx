import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { BiStar } from 'react-icons/bi';
import { BsEye, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


const HomeNewsItem = ({ newsItem }) => {
    console.log(newsItem);
    const {category_id,_id, title, author, image_url, details,rating,total_view
    } = newsItem;


    return (
        <div className='border border-[#E7E7E7] rounded-md space-y-2'>
            <div className='bg-[#F3F3F3] flex justify-between p-6 rounded-t-md'>
                <div className='flex gap-2'>
                    <img className='w-13 rounded-full' src={author.img} alt={author.name} />
                    <div>
                        <h4 className='font-bold text-base text-[#403F3F]'>{author.name || 'Sarah'}</h4>
                        <p className='text-[#706F6F]'>{author.published_date
                        }</p>
                    </div>
                </div>
            </div>

            <div className='p-6 space-y-3'>
                <h2 className='text-lg md:text-xl font-bold'>{title}</h2>
                <img className='w-full' src={image_url
                } alt={title} />
                <p className='text-[#706F6F] line-clamp-4 text-base' >{details}</p>
                <Link key={_id} to={`/news/category/${category_id}`} className=' font-medium text-[#FF8C47] '>Read More</Link>

                <hr className='border border-[#E7E7E7] my-4' />

                <div className='flex justify-between'>
                    <div className="flex gap-2 items-center">
                    <Rating value={rating.number} readOnly cancel={false}
                    onIcon={<BsStarFill className='text-[#FF8C47] text-xl'/>}
                    offIcon={<BsStarHalf className='text-[#FF8C47] text-xl'/>}
                    /> <span className='font-medium text-base text-[#706F6F] '>{rating.number}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                    <BsEye/>
                    <span className='font-medium text-base text-[#706F6F] '>{total_view}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeNewsItem;