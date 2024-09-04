import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-fuchsia-700 to-pink-300">
            <Link to={'/'}>
                <h1 className="text-3xl text-white font-bold pt-8 mx-10">Suthraya</h1>
            </Link>
            <div className="flex items-center justify-center">
                <div className="max-w-lg w-full p-8 pt-20 space-y-3  dark:bg-fuchsia-50 dark:text-gray-800 mt-10">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="username" placeholder="Email address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-fuchsia-600">Login</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 rounded-sm">
                            <FcGoogle size={24} />
                        </button>
                        <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                            <FaFacebookSquare size={24} color="blue" />
                        </button>
                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <FaGithub size={24} />

                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <Link to={'/signup'} className="underline hover:text-blue-800 dark:text-gray-800"> Sign up</Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;