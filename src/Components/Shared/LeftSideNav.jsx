import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SportsNews from '../SportsNews';




const LeftSideNav = () => {

    const [categories,setCategories]=useState([]);
    const [categoryNews,setCategoryNews]=useState([]);
    const [dataLength,setDataLength]=useState(4);
    const [selectedCategory,setSelectedCategory]=useState('04');

    useEffect(()=>{
       fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category));

    },[]);

    
    const handleFilterCategory=(category_id ='04')=>{
        fetch (`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res=>res.json())
        .then(data=>setCategoryNews(data.data));
        setSelectedCategory(category_id);
        
    }
    useEffect(()=>{
        handleFilterCategory();
        setDataLength(4);
    },[]);

    const handleShowMore=()=>{

        setDataLength(dataLength+2);
    }
    return (
        <div>
            <div>
            <ul className=' space-y-1 mb-3 '>
            {
                categories.map(category=> <li onClick={()=>handleFilterCategory(category.category_id)} className={`py-2 px-3 rounded-sm cursor-pointer 
                    ${selectedCategory === category.category_id 
                        ? 'bg-[#E7E7E7] dark:bg-gray-600' 
                        : 'hover:bg-[#E7E7E7] dark:hover:bg-gray-600'}`} key={category.category_id} >
                   {category.category_name} 
                    </li>)
            }
            </ul>
            </div>
       
       <div className='grid grid-cols-1 gap-7'>
            {
                categoryNews.slice(0,dataLength).map((sportsNewsItem,idx)=><SportsNews key={idx} sportsNewsItem={sportsNewsItem}></SportsNews>)
            }
            <button onClick={handleShowMore} className={`btn text-base ${categoryNews.length===dataLength ||categoryNews.length<dataLength && 'hidden' }`}>Show More</button>
       </div>
        </div>
    );
};

export default LeftSideNav;