import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const TopNav = () => {

    const navLinks= <>
       <li><Link to='/' className='hover:text-[#D72050] focus:text-[#D72050] active:text-[#D72050] ' >Home</Link></li>
        <li><Link to='/about' className='hover:text-[#D72050] focus:text-[#D72050] active:text-[#D72050]'>About</Link></li>
        <li><Link to='/career' className='hover:text-[#D72050] focus:text-[#D72050] active:text-[#D72050]'>Career</Link></li>
    
    </>
    const navigate=useNavigate();

    const {user,logOut}=useContext(AuthContext);

    const handleStatusLogOrLogOut=()=>{ 
      user ? logOut() : navigate('/login');
    }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">

    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {
        navLinks
     }
      </ul>
    </div>
  </div>
  <div className="flex-1 navbar-center hidden md:inline-flex ">
  <ul className='menu-horizontal gap-5'>
      {
            navLinks
        }
      </ul>
  </div>
  <div className="navbar-end gap-4">
    <button className="btn btn-ghost btn-circle w-12 h-12">
      <img className='rounded-full' src='https://i.ibb.co/kg8cHqGn/5e74bcada58f0f3ca62e568b-featured-nick.png' alt="" />
    </button>
    <button onClick={handleStatusLogOrLogOut} className="btn btn-ghost bg-[#D72050] text-white text-base font-normal ">
     {
      user && 'Log Out' || 'Login'
     }
    </button>
  </div>
</div>
    );
};

export default TopNav;