import { FaList, FaLocationArrow } from 'react-icons/fa';
import './banner.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { PiSuitcaseThin } from 'react-icons/pi';
import { IoPeopleOutline } from 'react-icons/io5';
import { IoMdBook } from 'react-icons/io';


const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-overlay">
                <div className="banner-content">
                    <h1 className="banner-title">Empower Your Growth, Connect with Experts
                    </h1>
                    <p className="banner-description">Join a community where learning meets networking. Explore courses, connect with like-minded individuals, and discover new opportunities</p>
                    <div className="banner-buttons">
                        <button className='btn btn-primary bg-fuchsia-400'>
                            <FaList />
                            <span>Our Courses</span>
                        </button>
                        <button className='btn btn-second'>Get Started
                            <span><FaLocationArrow /></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='feature-container'>
                <div className='feature transform hover:bg-fuchsia-200 hover:scale-95 duration-200'>
                    <p className='text-fuchsia-900 mb-2'><IoMdBook size={52} />
                    </p>
                    <h3 className='feature-title'>Learn & Grow</h3>
                    <p className='feature-description'>Access courses, quizzes, and live streams to enhance your skills and knowledge</p>
                </div>

                <div className='feature transform hover:bg-fuchsia-200 hover:scale-95 duration-200'>
                    <p className='text-fuchsia-900 mb-2'>
                    <IoPeopleOutline size={52} />
                    </p>
                    <h3 className='feature-title'>Community & Clans
                    </h3>
                    <p className='feature-description'>Join communities or clans to connect, collaborate, and grow together</p>
                </div>

                <div className='feature transform hover:bg-fuchsia-200 hover:scale-95 duration-200'>
                    <p className='text-fuchsia-900 mb-2'>
                    <AiOutlineMessage size={52} />
                    </p>
                    <h3 className='feature-title'>Forum & Social
                    </h3>
                    <p className='feature-description'>Engage in discussions, share insights, and interact with the community</p>
                </div>

                <div className='feature transform hover:bg-fuchsia-200 hover:scale-95 duration-200'>
                    <p className=' text-fuchsia-900 mb-2'>
                    <PiSuitcaseThin size={52} />

                    </p>
                    <h3 className='feature-title'>Career Opportunities
                    </h3>
                    <p className='feature-description'>Find job opportunities, freelance gigs, and build your professional network</p>
                </div>
            </div>

        </section>

    );
};

export default Banner;