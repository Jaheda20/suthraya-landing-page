import { FaUserTie } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const AboutUs = () => {
    return (
        <div className="relative">
            <div className="mt-32 w-full h-[550px] bg-fixed" style={{
                backgroundImage: `url('https://i.postimg.cc/yxYqQM7p/photo-1486312338219-ce68d2c6f44d-q-80-w-1472-auto-format-fit-crop-ixlib-rb-4-0.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'dimgray',
                backgroundBlendMode: 'multiply'
            }}>
                <div className="max-w-5xl mx-auto w-full h-[600px] flex flex-col items-center justify-center"
                >
                    <p className="text-xl font-semibold text-white mb-6">Know About Us</p>
                    <h1 className="text-5xl font-bold text-white">Education, Evolved: The Suthraya Way </h1>
                </div>               
            </div>

            <div className="max-w-7xl mx-auto w-full bg-fuchsia-900 bg-opacity-90 py-10 absolute left-20 -bottom-28">
                    <div className="max-w-5xl mx-auto flex items-center justify-around">
                        <div>
                            <div className="text-slate-200 text-center flex flex-col items-center justify-center space-y-3">
                                <p className=""><MdOutlineLibraryBooks size={44} />
                                </p>
                                <h1 className="text-4xl font-bold">100</h1>
                            </div>
                            <hr className="divider border-dashed border-white mt-4" />
                            <p className="text-slate-100 mt-6">Total Trainings</p>
                        </div>

                        <div>
                            <div className="text-slate-200 text-center flex flex-col items-center justify-center space-y-3">
                                <p className=""><PiStudentBold size={44} />
                                </p>
                                <h1 className="text-4xl font-bold">200</h1>
                            </div>
                            <hr className="divider border-dashed border-white mt-4" />
                            <p className="text-slate-100 mt-6">No. of Users</p>
                        </div>

                        <div>
                            <div className="text-slate-200 text-center flex flex-col items-center justify-center space-y-3">
                                <p className=""><FaUserTie size={44} />
                                </p>
                                <h1 className="text-4xl font-bold">30</h1>
                            </div>
                            <hr className="divider border-dashed border-white mt-4" />
                            <p className="text-slate-100 mt-6">Total Experts</p>
                        </div>

                    </div>
                </div>

        </div>

    );
};

export default AboutUs;