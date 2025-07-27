import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiOutlineGoogle } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa6';

const RightSideNav = () => {
    return (
        <div className='space-y-3 '>
            <div className='flex flex-col gap-3'>
                {/* GitHub */}
                <button className="btn border-gray-600">
                    <AiFillGithub className='text-xl'/>
                    Login with GitHub
                </button>

                {/* Google */}
                <button className="btn border-gray-600">
                    <FaGoogle/>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;