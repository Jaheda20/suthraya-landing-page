import { useEffect, useState } from "react";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div className="my-20 bg-fuchsia-50">
            <div className="max-w-7xl w-full mx-auto py-10">
                <p className="mb-2 text-fuchsia-900 font-semibold text-lg">Learning Paths</p>
                <h1 className="text-3xl font-bold text-slate-600">Browse Categories to Start Your Learning Journey</h1>
                <div className="mt-10 grid grid-cols-3 gap-6">
                    {
                        categories.map(category => <div key={category.id} className="w-full h-56 relative overflow-hidden transition-transform duration-200 hover:scale-105 s group">
                            <div className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${category.image})` }}>
                                    <div className="absolute inset-0 bg-black opacity-70 transition duration-200 group-hover:bg-fuchsia-700 group-hover:opacity-70"></div>
                               
                                <div className="relative z-10 p-4 text-white flex flex-col items-center justify-center h-full">
                                    <h3 className="text-2xl font-bold">{category.name}</h3>
                                    <p className="text-lg mt-2">{category.number_of_courses} contents</p>
                                </div>

                            </div>

                        </div>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Categories;