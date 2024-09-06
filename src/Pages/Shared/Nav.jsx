import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { MdOutlineLogin } from "react-icons/md";
import { IoIosPeople } from 'react-icons/io';
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        console.log('open open', isOpen)
        setIsOpen(!isOpen)
    }

    const navOptions = (
        <>
            <li>
                <NavLink className={({ isActive }) => `flex items-center md:gap-1 gap-3 p-2 ${isActive ? 'bg-fuchsia-100 font-semibold text-blue-800 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/"><HiOutlineHome size={18} />
                    Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center md:gap-1 gap-3 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/skillsPod"><HiOutlineDesktopComputer size={18} />
                    Skills Pod</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center md:gap-1 gap-3 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold py-2 px-4 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/forum"><BiMessageRoundedDots size={18} />
                    Forum</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center md:gap-1 gap-3 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold py-2 px-4 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/community"><IoIosPeople size={18} />
                    Community</NavLink>
            </li>
            <li>
                <Link to={'/login'} className="btn gap-3 md:ml-6 md:bg-fuchsia-600  md:text-white text-slate-800 flex items-center md:gap-2 md:py-2 md:px-4 rounded-lg hover:bg-fuchsia-300 hover:text-slate-800">
                    <MdOutlineLogin />
                    <span>
                        Login
                    </span>
                </Link>
            </li>
        </>
    )

    return (
        <nav className="navbar">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between my-6 px-4 md:px-0">

                <a href="#" className="text-fuchsia-800 text-3xl md:text-5xl font-bold">S
                    <span className='text-3xl text-fuchsia-600'>uthraya</span>
                </a>

                {/* For desktop view */}
                <ul className="hidden md:flex space-x-1 justify-end ml-auto">
                    {navOptions}

                </ul>

                {/* For mobile view */}
                <button onClick={handleMenuToggle} className='btn text-fuchsia-900 md:hidden'>
                    <GiHamburgerMenu size={28} />
                </button>

                {isOpen && (
                    <div className="absolute top-14 right-0 z-50 bg-fuchsia-100 bg-opacity-90 w-96 h-full p-4 shadow-md rounded-lg">
                        {/* Close Button */}
                        <button onClick={handleMenuToggle} className="absolute top-4 right-4 text-fuchsia-900">
                            <IoClose size={24} />
                        </button>

                        <ul className="flex flex-col space-y-4">
                            {navOptions}
                        </ul>
                    </div>
                )}

            </div>


        </nav>


    );
};

export default Nav;

