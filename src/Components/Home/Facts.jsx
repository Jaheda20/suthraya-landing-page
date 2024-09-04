import { AiOutlineInteraction } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";

const Facts = () => {
    return (
        <div className="mt-44 max-w-7xl mx-auto">
            <p className="mb-2 text-fuchsia-900 font-semibold text-lg">Our Offerings</p>
            <h1 className="text-3xl font-bold text-slate-700">What We Do Differently</h1>
            <div className="mt-10 grid grid-cols-3 gap-10">
                <div className="flex gap-4 bg-fuchsia-100 p-6 shadow-lg border-t-4 border-fuchsia-900 rounded-md transition hover:scale-105 duration-300">
                    <p className="text-fuchsia-800"><FaUserAstronaut size={44} />
                    </p>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold text-slate-800">Expert-Led Content</h3>
                        <p className="text-slate-700 text-sm">Learn from industry leaders and experienced professionals who bring real-world insights and practical advice to enhance your learning journey</p>
                    </div>

                </div>

                <div className="flex gap-4 bg-fuchsia-100 p-6 shadow-lg border-t-4 border-fuchsia-900 rounded-md transition hover:scale-105 duration-300">
                    <p className="text-fuchsia-800"><AiOutlineInteraction size={44} />
                    </p>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold text-slate-800">Interactive Learning</h3>
                        <p className="text-slate-700 text-sm">Engage with our content through interactive quizzes designed to reinforce your understanding and test your knowledge</p>
                    </div>

                </div>

                <div className="flex gap-4 bg-fuchsia-100 p-6 shadow-md border-t-4 border-fuchsia-900 rounded-md transition hover:scale-105 duration-300">
                    <p className="text-fuchsia-800"><SlPeople size={44} />
                    </p>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-semibold text-slate-800">Collaborative Community</h3>
                        <p className="text-slate-700 text-sm">Join a vibrant community of learners and contributors. Share your expertise, contribute content, and engage in discussions to deepen your understanding</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Facts;