import React from 'react';

const BreakingNewsMarqee = () => {
    return (
        <div className='flex gap-3 p-3 bg-[#E7E7E7] dark:bg-gray-600 rounded-md justify-center items-center'>
            <button className='bg-[#D72050] px-3 py-2 text-lg rounded-sm'>Latest</button>
            <marquee className='text-xl font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
        </div>
    );
};

export default BreakingNewsMarqee;