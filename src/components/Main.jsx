import React, { use, useState } from 'react';
import Stack from './Stack';


const Main = ({ dataPromise }) => {
    const technologies = use(dataPromise);

    const [stackedTechnologies, setStackedTechnologies] = useState([]);

    const handleAddToStack = (tech) => {
        setStackedTechnologies((exist) => {
            for (const item of exist) {
                if (item.id === tech.id) {
                    //toast.error(`${tech.name} is already selected`);
                    return exist; // already in the stack..
                }
            }

            return [...exist, tech];
        });
    };

    return (
        <section id="technologies" className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-[Inter]">
                        Explore the{" "}
                        <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-3 text-base text-slate-500 sm:text-lg font-[Plus_Jakarta_Sans]">
                        Add any technologies you like — each one can be added only once.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px]">

                    {/* Technology Cards */}
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 font-[Plus_Jakarta_Sans]">
                        {technologies.map((tech) => (
                            <div
                                key={tech.id}
                                id={`tech-card-${tech.id}`}
                                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg"
                            >

                                {/* Icon and Badge */}
                                <div className="flex items-start justify-between gap-3">
                                    <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
                                    <span className="rounded-full bg-pink-50 px-2.5 py-1 text-xs font-semibold text-pink-600">
                                        {tech.badge}
                                    </span>
                                </div>

                                {/* Technology Name */}
                                <h3 className="mt-4 text-lg font-bold text-slate-900">
                                    {tech.name}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                    {tech.description}
                                </p>

                                {/* Technology Metadata */}
                                <div className="mt-auto flex items-center justify-between gap-2 pt-5 text-xs text-slate-500">

                                    <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                                        {tech.category}
                                    </span>

                                    <span className="min-w-0 truncate">
                                        {tech.difficulty}
                                    </span>

                                    <span className="flex shrink-0 items-center gap-1 font-semibold text-slate-700">
                                        <span className="text-amber-400">★</span>
                                        {tech.rating}
                                    </span>

                                </div>

                                {/* Add Button */}
                                <button
                                    type="button"
                                    id={`tech-toggle-${tech.id}`}
                                    onClick={() => handleAddToStack(tech)}
                                    className="mt-4 cursor-pointer rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
                                    Add to Stack
                                </button>

                            </div>
                        ))}
                    </div>
                    <>
                        <Stack stackedTechnologies={stackedTechnologies} setStackedTechnologies={setStackedTechnologies} />
                    </>

                </div>
            </div>
        </section>
    );
};

export default Main;