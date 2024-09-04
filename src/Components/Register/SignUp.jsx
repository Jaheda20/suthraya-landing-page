import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-fuchsia-600 to-pink-200 flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="flex w-full h-full py-12 max-w-4xl mx-auto">
                    {/* Form Section */}
                    <div className="flex-1 flex flex-col justify-center p-8 dark:bg-fuchsia-50 dark:text-gray-800">
                        <h1 className="text-2xl font-bold text-center mb-2 text-fuchsia-800 ">Welcome to the Community</h1>
                        <h4 className="text-xs text-center mb-8 ">Create an account to unlock personalized learning experiences, exclusive content, and connect with a community of learners!</h4>
                        <form noValidate="" action="" className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                                <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="image" className="block dark:text-gray-600">Profile Picture</label>
                                <input type="text" name="image" id="image" placeholder="Your Profile Picture" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-fuchsia-600">Sign up</button>
                        </form>

                        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                            <Link to={'/login'} className="underline hover:text-blue-800 dark:text-gray-800"> Sign in</Link>
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 relative">
                        <img src="https://i.postimg.cc/mg6p0scK/linkedin-sales-solutions-0-Qv-Typ0g-H3-A-unsplash.jpg" alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-fuchsia-900 bg-opacity-80 flex flex-col items-center justify-center">
                            <Link to={'/'}>
                                <h1 className="text-5xl font-bold text-white">Suthraya</h1>
                            </Link>
                            <p className="mt-2 text-white font-semibold">Building a platform for growth and community</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;