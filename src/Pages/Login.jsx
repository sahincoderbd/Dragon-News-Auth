import React from 'react';
import Header from '../Components/Header';
import TopNav from '../Components/Shared/TopNav';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form= new FormData(e.currentTarget);
        console.log(form.get('email'));
    }
    return (
        <div className='py-10 mx-auto'>
            <TopNav></TopNav>
            <form className='mt-20' onSubmit={handleLoginSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border mx-auto p-4">
                <h3 className='text-2xl font-bold text-center'>Login your account</h3>

                <label className="label text-base">Email</label>
                <input type="email" name='email' className="input w-full text-base" placeholder="Email" required/>

                <label className="label text-base">Password</label>
                <input type="password" name='password' className="input w-full text-base" placeholder="Password" required />

                <Link to='/reset-password' className='text-md link link-hover'>Forgot Password?</Link>

                <button className="btn btn-neutral mt-4 h-11">Login</button>

                <p className=' mt-3 text-base text-center'>Dont’t Have An Account ?<Link className='text-[#F75B5F]' to='/register'> Register</Link></p>
            </fieldset>
           
            </form>
        </div>
    );
};

export default Login;