import './image.css'


const TopSkills = () => {

    return (
        <div className="max-w-7xl w-full mx-auto mt-48 flex ">
            <div className="w-1/2 relative">
                <div className="image-container">
                    <img src="https://i.postimg.cc/KzDhk229/photo-1516534775068-ba3e7458af70-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className='w-full h-auto object-cover'/>
                </div>
            </div>
            <div className="w-1/2 p-20">
                <h2 className="text-3xl font-semibold text-blue-900">Enhance Your Abilities with Expert-Led Learning</h2>
                <p className="mt-8 text-slate-700">Discover a range of expert-led courses designed to help you master new skills, boost your confidence, and achieve your goals. Start your journey to success today!</p>
                <button className="btn bg-indigo-950 text-white mt-10">Learn more..</button>
            </div>


        </div>
    );
};

export default TopSkills;