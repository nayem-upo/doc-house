import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex bg-[#07332F] justify-around items-center py-4'>
            <img className='w-[160px]' src="https://i.ibb.co/VpKqHhM/Group-2.png" alt="" />
            <div className='text-white font-semibold flex gap-7'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Appointment</NavLink>
                <NavLink to="/">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;