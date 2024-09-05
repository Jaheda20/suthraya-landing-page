import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { MdOutlineLogin } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosPeople } from 'react-icons/io';
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";



const Nav = () => {

    const navOptions = (
        <>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 font-semibold text-blue-800 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/"><TiHomeOutline size={18}/>
                    Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/skillsPod"><IoIosPeople size={18}/>
                    Skills Pod</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold py-2 px-4 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/forum"><BiMessageRoundedDots size={18}/>
                    Forum</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold py-2 px-4 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/community"><HiOutlineDesktopComputer size={18}/>
                    Community</NavLink>
            </li>


        </>
    )

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="text-fuchsia-900 text-5xl font-bold">S
                    <span className='text-3xl text-fuchsia-500'>uthraya</span>
                </a>
                <ul className="nav-links flex space-x-1 justify-end ml-auto">
                    {navOptions}

                </ul>
                <Link to={'/login'} className="btn bg-fuchsia-600 ml-6 text-white">
                    <MdOutlineLogin className='login-icon' />
                    <span>
                        Login
                    </span>
                </Link>

            </div>
        </nav>
    );
};

export default Nav;