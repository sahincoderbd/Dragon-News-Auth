import React from 'react';

const BreakingNewsMarqee = () => {
    return (
        <div className='flex gap-3 p-3 bg-gray-300 justify-center items-center'>
            <button className='bg-[#D72050] px-3 py-2 text-lg text-white'>Latest</button>
            <marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
        </div>
    );
};

export default BreakingNewsMarqee;