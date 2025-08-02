import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../extraStyles/LeftSideNav.css"
import SportsNews from '../SportsNews';

export const handleFilterCategory=(filter='all')=>{
    const lowerChar=filter.toLowerCase();
    console.log(lowerChar);
}
const LeftSideNav = () => {

    const [categories,setCategories]=useState([]);
    const [sportsCategory,setSportsCategory]=useState([]);

    useEffect(()=>{
       fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category));

    },[]);
    console.log(categories);

    useEffect (()=>{
        fetch ('https://openapi.programming-hero.com/api/news/category/04')
        .then(res=>res.json())
        .then(data=>setSportsCategory(data.data));

    },[]);
    
    
    return (
        <div>
            <div>
            <ul className='left-side-categorylist space-y-1 mb-3 '>
            {
                categories.map(category=> <li onClick={()=>handleFilterCategory(category.category_name)} className='py-2 px-3 active:bg-[#E7E7E7] dark:active:bg-gray-600 hover:bg-[#E7E7E7] dark:hover:bg-gray-600 rounded-sm' key={category.category_id}>
                    <Link className='w-full py-2'>{category.category_name}</Link>
                    </li>)
            }
            </ul>
            </div>
       
       <div className='grid grid-cols-1 gap-7'>
            {
                sportsCategory.map((sportsNewsItem,idx)=><SportsNews key={idx} sportsNewsItem={sportsNewsItem}></SportsNews>)
            }
       </div>
        </div>
    );
};

export default LeftSideNav;