import React, { useContext } from 'react';
import TopNav from '../Components/Shared/TopNav';
import { Link } from 'react-router-dom';
import '../App.css'
import { AuthContext } from '../context/AuthProvider';
const Register = () => {

    const {createUser} =useContext(AuthContext);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form= new FormData(e.currentTarget);
        const name=form.get('name');
        const photoUrl=form.get('photoUrl');
        const email=form.get('email');
        const password=form.get('password');
        console.log(name,email,photoUrl,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className='py-10 mx-auto'>
            <TopNav></TopNav>
            <form className='mt-20' onSubmit={handleRegisterSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border mx-auto p-4">
                    <h3 className='text-2xl font-bold text-center'>Register your account</h3>

                    <div className='mt-5'>
                    <label className="label text-base">Your Name</label>
                    <input type="text" name='name' className="input w-full text-base" placeholder="Enter your name" required />
                    </div>

                    <div>
                    <label className="label text-base">Photo URL</label>
                    <input type="url" name='photoUrl' className="input w-full text-base" placeholder="Photo Url" required />
                    </div>

                    <div>
                    <label className="label text-base">Email</label>
                    <input type="email" name='email' className="input w-full text-base" placeholder="Email" required/>
                    </div>

                    <div>
                    <label className="label text-base">Password</label>
                    <input type="password" name='password' className="input w-full text-base" placeholder="Password" required />
                    </div>

                    <div className='flex gap-2 py-3'>

                    <input type="checkbox" className="text-white checkbox checked:bg-[#F75B5F]  active:bg-[#F75B5F] border border-[#F75B5F]  validator w-5 h-5 rounded-sm" />
                    <label className="label text-base">Accept Term & Conditions</label>
                    <p className="validator-hint">Required</p>
                    </div>

                    <button className="btn btn-neutral h-11">Register</button>

                    <p className=' mt-3 text-base text-center'>Already Have An Account ?<Link className='text-[#F75B5F]' to='/login'> Login</Link></p>
                </fieldset>

            </form>
        </div>
    );
};

export default Register;