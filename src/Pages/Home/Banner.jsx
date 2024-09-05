import { FaList, FaLocationArrow } from 'react-icons/fa';
import './banner.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { PiSuitcaseThin } from 'react-icons/pi';
import { IoPeopleOutline } from 'react-icons/io5';
import { IoMdBook } from 'react-icons/io';


const Banner = () => {
    return (
        <section className="relative h-screen flex items-center justify-center" style={{
            backgroundImage: `url('https://i.postimg.cc/RhMdX68z/photo-1516321497487-e288fb19713f-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className="absolute bg-black inset-0 bg-opacity-60 flex items-center justify-center">
                <div className="max-w-3xl mx-auto w-full text-center">
                    <h1 className="text-6xl font-extrabold text-white leading-snug">Empower Your Growth, Connect with Experts
                    </h1>
                    <p className="mt-2 text-slate-200 mb-8">Join a community where learning meets networking. Explore courses, connect with like-minded individuals, and discover new opportunities</p>
                    <div className="flex items-center justify-center gap-8">
                        <button className='btn flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-fuchsia-300 hover:bg-fuchsia-200'>
                            <FaList />
                            <span>Our Courses</span>
                        </button>
                        <button className='btn bg-white flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-red-200'>Get Started
                            <span><FaLocationArrow /></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 absolute -bottom-36 gap-6'>
                <div className='p-6 bg-white shadow-md transform hover:bg-fuchsia-200 hover:scale-95 duration-200 rounded-lg'>
                    <p className='text-fuchsia-900 mb-1'><IoMdBook size={52} />
                    </p>
                    <h3 className='text-xl font-semibold mb-3'>Learn & Grow</h3>
                    <p className='text-sm text-slate-600'>Access courses, quizzes, and live streams to enhance your skills and knowledge</p>
                </div>

                <div className='p-6 bg-white shadow-md transform hover:bg-fuchsia-200 hover:scale-95 duration-200 rounded-lg'>
                    <p className='text-fuchsia-900 mb-1'>
                        <IoPeopleOutline size={52} />
                    </p>
                    <h3 className='text-xl font-semibold mb-3'>Community & Clans
                    </h3>
                    <p className='text-slate-600 text-sm'>Join communities or clans to connect, collaborate, and grow together</p>
                </div>

                <div className='p-6 bg-white shadow-md transform hover:bg-fuchsia-200 hover:scale-95 duration-200 rounded-lg'>
                    <p className='text-fuchsia-900 mb-1'>
                        <AiOutlineMessage size={52} />
                    </p>
                    <h3 className='text-xl font-semibold mb-3'>Forum & Social
                    </h3>
                    <p className='text-slate-600 text-sm'>Engage in discussions, share insights, and interact with the community</p>
                </div>

                <div className='p-6 bg-white shadow-md transform hover:bg-fuchsia-200 hover:scale-95 duration-200 rounded-lg'>
                    <p className=' text-fuchsia-900 mb-1'>
                        <PiSuitcaseThin size={52} />

                    </p>
                    <h3 className='text-xl font-semibold mb-3'>Career Opportunities
                    </h3>
                    <p className='text-slate-600 text-sm'>Find job opportunities, freelance gigs, and build your professional network</p>
                </div>
            </div>

        </section>

    );
};

export default Banner;