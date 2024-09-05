import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const ErrorPage = () => {
    return (
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center my-32">
            <h1 className="text-9xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-400 bg-clip-text text-transparent tracking-widest">Oops!</h1>
            <h2 className="text-4xl mt-4 font-bold text-slate-800">404 - Page Not Found</h2>
            <p className="mt-8 text-lg">The page you are looking for is under construction</p>
            <Link to={'/'} className="btn bg-fuchsia-600 text-white hover:bg-fuchsia-300 hover:text-slate-800 mt-16">
                <FaArrowLeft />
                <span>
                    Go back to Homepage
                </span>
            </Link>
        </div>
    );
};

export default ErrorPage;