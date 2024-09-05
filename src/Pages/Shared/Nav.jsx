import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { MdOutlineLogin } from "react-icons/md";
import { IoIosPeople } from 'react-icons/io';
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";




const Nav = () => {

    const navOptions = (
        <>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 font-semibold text-blue-800 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/"><HiOutlineHome size={18}/>
                    Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/skillsPod"><HiOutlineDesktopComputer size={18}/>
                    Skills Pod</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold py-2 px-4 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/forum"><BiMessageRoundedDots size={18}/>
                    Forum</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `flex items-center gap-1 p-2 ${isActive ? 'bg-fuchsia-100 text-blue-800 font-semibold py-2 px-4 rounded-md' : "text-slate-800 hover:text-blue-800"}`} to="/community"><IoIosPeople size={18}/>
                    Community</NavLink>
            </li>
        </>
    )

    return (
        <nav className="navbar">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between my-6">
                <a href="#" className="text-fuchsia-800 text-5xl font-bold">S
                    <span className='text-3xl text-fuchsia-600'>uthraya</span>
                </a>
                <ul className="flex space-x-1 justify-end ml-auto">
                    {navOptions}

                </ul>
                <Link to={'/login'} className="btn bg-fuchsia-600 ml-6 text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-fuchsia-300 hover:text-slate-800">
                    <MdOutlineLogin />
                    <span>
                        Login
                    </span>
                </Link>

            </div>
        </nav>

        
    );
};

export default Nav;

