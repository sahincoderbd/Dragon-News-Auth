import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../extraStyles/LeftSideNav.css"
const LeftSideNav = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
       fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category));

    },[])
    console.log(categories);
    return (
        <div>
            <div>
            <ul className='left-side-categorylist space-y-1'>
            {
                categories.map(category=> <li className='py-2 px-3 active:bg-[#E7E7E7] hover:bg-[#E7E7E7] rounded-sm' key={category.category_id}>
                    <Link to={`category/${category.category_id}`} className='w-full'>{category.category_name}</Link>
                    </li>)
            }
            </ul>
            </div>

        </div>
    );
};

export default LeftSideNav;