import { FaList, FaLocationArrow } from 'react-icons/fa';
import './banner.css';


const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-overlay">
                <div className="banner-content">
                    <h1 className="banner-title">Empower Your Growth, Connect with Experts
                    </h1>
                    <p className="banner-description">Join a community where learning meets networking. Explore courses, connect with like-minded individuals, and discover new opportunities</p>
                    <div className="banner-buttons">
                        <button className='btn btn-primary'>
                            <FaList />
                            <span>Our Courses</span>
                        </button>
                        <button className='btn btn-secondary'>Get Started
                            <span><FaLocationArrow /></span>                          
                            </button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Banner;