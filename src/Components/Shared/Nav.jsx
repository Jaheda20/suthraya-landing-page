import { NavLink } from 'react-router-dom';
import './navbar.css';
import { MdOutlineLogin } from "react-icons/md";



const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="logo">S
                    <span className='logo-name'>uthraya</span>
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
                <a href="" className="btn login-btn">
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