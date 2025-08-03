import React, { useContext } from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiOutlineGoogle } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa6';
import facebook from '../../assets/Group 48095494.png';
import instagram from '../../assets/instagram.png';
import twiter from '../../assets/twiterrion.png';

import qrZone1 from '../../assets/qrZone1.png';
import qrZone2 from '../../assets/qrZone2.png';
import qrZone3 from '../../assets/qrZone3.png';
import { AuthContext } from '../../context/AuthProvider';

const RightSideNav = () => {

    const {logInWithGithub,logInWithGoogle}=useContext(AuthContext);

    const handleLoginWithGithub=()=>{
        logInWithGithub()
        .then(result=>{
            console.log('user Logged in via Github',result.user.displayName);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleLoginWithGoogle=()=>{
        logInWithGoogle()
        .then(result=>{
            console.log('user Logged in via Google',result.user.displayName);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='space-y-3 '>
            <div className='flex flex-col gap-3'>
                {/* GitHub */}
                <button onClick={handleLoginWithGithub} className="btn border-gray-600">
                    <AiFillGithub className='text-xl' />
                    Login with GitHub
                </button>

                {/* Google */}
                <button onClick={handleLoginWithGoogle} className="btn border-gray-600">
                    <FaGoogle />
                    Login with Google
                </button>
            </div>
            <div className='flex flex-col gap-3'>
                <h4 className='font-bold'>Find Us on</h4>
                <div className='border border-gray-300 dark:border-gray-600 rounded-md'>
                    <div className='flex gap-2 items-center flex-nowrap border-b border-gray-300 dark:border-gray-600 py-3 pl-4'>
                    <img className='' src={facebook} alt="Facebook" /><a href="#">Facebook</a>
                    </div>
                    <div className='flex gap-2 items-center flex-nowrap border-b border-gray-300 dark:border-gray-600 py-3 pl-4'>
                    <img className='' src={twiter} alt="Facebook" /><a href="#">Twiter</a>
                    </div>
                    <div className='flex gap-2 items-center flex-nowrap  py-3 pl-4'>
                    <img className='' src={instagram} alt="Facebook" /><a href="#">Instagram</a>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-3  bg-[#F3F3F3] dark:bg-gray-600 rounded-md p-4">
                <h4 className="font-medium text-xl">Q Zone</h4>

                <img src={qrZone1} alt="QZone1" />
                <img src={qrZone2} alt="QZone1" />
                <img src={qrZone3} alt="QZone1" />


            </div>
        </div>
    );
};

export default RightSideNav;