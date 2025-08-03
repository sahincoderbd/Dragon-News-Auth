import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import BreakingNewsMarqee from '../Components/BreakingNewsMarqee';
import TopNav from '../Components/Shared/TopNav';
import LeftSideNav from '../Components/Shared/LeftSideNav';
import RightSideNav from '../Components/Shared/RightSideNav';
import HomeNewsItem from '../Components/HomeNewsItem';
const Home = () => {

    const [allNews,setAllNews]=useState([]);
    const [dataLength,setDataLength]=useState(2);


      useEffect (()=>{
            fetch ('https://openapi.programming-hero.com/api/news/category/08')
            .then(res=>res.json())
            .then(data=>setAllNews(data.data));
    
        },[]);
        const handleShowMore =()=>{
            const newDataLength= dataLength + 2;
            setDataLength(newDataLength);
        }

    return (
        <div className='py-10 space-y-3'>
            <Header></Header>
            <BreakingNewsMarqee></BreakingNewsMarqee>
            <TopNav></TopNav>
           {/* Main Section */}
           <div className='grid grid-cols-1 md:grid-cols-4 gap-3 '>
            <div className='space-y-3'>
                <h4 className='font-bold'>All Categories</h4>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-span-2 space-y-3'>
                <h4 className='font-bold'>Dragon News Home</h4>

               {
                allNews.slice(0,dataLength).map((newsItem,idx)=><HomeNewsItem key={idx} newsItem={newsItem}></HomeNewsItem>)
               }
               <button onClick={handleShowMore} className={ `btn mx-auto block ${allNews.length===dataLength &&'hidden' }`}>Show More</button>
            </div>

            <div className='space-y-3'>
                <h4 className='font-bold '>Login with</h4>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;