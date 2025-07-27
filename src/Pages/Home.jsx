import React from 'react';
import Header from '../Components/Header';
import BreakingNewsMarqee from '../Components/BreakingNewsMarqee';
import TopNav from '../Components/Shared/TopNav';
import LeftSideNav from '../Components/Shared/LeftSideNav';
import RightSideNav from '../Components/Shared/RightSideNav';
const Home = () => {
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
            <div className='col-span-2'>
                <h4 className='font-bold'>Dragon News Home</h4>

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