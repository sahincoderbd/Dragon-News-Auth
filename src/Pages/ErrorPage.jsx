import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate,useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    const navigation = useNavigate();
    const handleGoToHome =()=>{
        navigation ('/');
    }
    return (
        <div id='error-page' className='container mx-auto flex flex-col flex-nowrap items-center justify-center text-center space-y-5 pt-4 py-3 min-h-screen'>
        <img src='https://i.ibb.co/KphSn9sz/image-removebg-preview-8.png' alt="error" className='w-1/5 mx-auto' />
        <div className='space-y-3'>
            <h2 className='text-5xl font-bold text-center py-5'>Oops. Page Not Found</h2>
            <p>Sorry, an unexpected error has occurred.</p>
      
        <p className='text-xl text-amber-400'>{error.statusText || error.message}</p>
      
      </div>
      <div className='flex justify-center items-center'>
        
       <button className='flex items-center bg-[#D72050] gap-1 rounded-lg px-4 text-white py-3 cursor-pointer' onClick={handleGoToHome}><AiOutlineArrowLeft className=''/>Back to Home</button>

      </div>
        </div>
    );
};

export default ErrorPage;