import { NavLink } from 'react-router-dom';
import './navbar.css';
import { MdOutlineLogin } from "react-icons/md";



const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="text-fuchsia-900 text-5xl font-bold">S
                    <span className='text-3xl text-fuchsia-500'>uthraya</span>
                    </a>
                <ul className="nav-links">
                    <NavLink>
                        <li>Home</li>
                    </NavLink>
                    <NavLink>
                        <li>About Us</li>
                    </NavLink>
                    <NavLink>
                        <li>Trainings & Courses</li>
                    </NavLink>
                    <NavLink>
                        <li>Contact</li>
                    </NavLink>

                </ul>
                <a href="" className="btn bg-fuchsia-600 ml-6 text-white">
                    <MdOutlineLogin className='login-icon'/>
                    <span>
                        Login
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default Nav;