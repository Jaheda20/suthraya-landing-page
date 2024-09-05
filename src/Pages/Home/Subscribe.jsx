const Subscribe = () => {
    return (
        <div className="relative max-w-5xl mx-auto w-full bg-fuchsia-900 text-white py-16 z-10 mt-40 flex items-center">
            <div className="w-1/2 pl-20">
                <h6 className="mb-3">Sign Up</h6>
                <h2 className="text-4xl font-semibold">Join Suthraya Today</h2>
                
            </div>
            <div className="text-center w-1/2 pr-20">                
                <form className="flex justify-center items-center space-x-4">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="px-4 py-3 rounded-md w-full text-gray-800 relative" 
                    />
                    <button 
                        type="submit" 
                        className="bg-slate-500 text-white px-8 py-2 rounded-md absolute right-24"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
