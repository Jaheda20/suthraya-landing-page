import './image.css'


const TopSkills = () => {

    return (
        <div className="max-w-7xl w-full mx-auto mt-48 flex ">
            <div className="w-1/2 relative">
                <div className="image-container">
                    <img src="https://i.postimg.cc/KzDhk229/photo-1516534775068-ba3e7458af70-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className='w-full h-auto object-cover' />
                </div>
            </div>
            <div className="w-1/2 p-20">
                <p className="mb-2 text-fuchsia-900 font-semibold text-lg">Skill Boost</p>
                <h2 className="text-3xl font-bold text-slate-600">Enhance Your Abilities with Expert-Led Learning</h2>
                <p className="mt-8 text-slate-700">Boost your skills with expert-led content, contribute your own insights, and test your knowledge with interactive quizzes. Start your learning adventure today!</p>
                <button className="btn bg-fuchsia-600 text-white mt-10">Learn more..</button>
            </div>


        </div>
    );
};

export default TopSkills;