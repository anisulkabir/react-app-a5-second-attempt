import React from 'react';
import reactIcon from "../assets/fallback-icons/react.png";
import vuejsIcon from "../assets/fallback-icons/vuedotjs.png";
import nodejsIcon from "../assets/fallback-icons/nodedotjs.png";
import typescriptIcon from "../assets/fallback-icons/typescript.png";
import viteIcon from "../assets/fallback-icons/vite.png";

// data
const technologies = [
    {
        id: "react",
        name: "React",
        icon: reactIcon,
        badge: "Popular",
        description:
            "A declarative, component-based JavaScript library for building modern user interfaces.",
        category: "Frontend",
        difficulty: "Beginner-Friendly",
        rating: 4.9,
    },
    {
        id: "vue",
        name: "Vue.js",
        icon: vuejsIcon,
        badge: "Versatile",
        description:
            "An approachable, performant, and versatile framework for building web user interfaces.",
        category: "Frontend",
        difficulty: "Beginner-Friendly",
        rating: 4.8,
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: typescriptIcon,
        badge: "Essential",
        description:
            "A strongly typed programming language that builds on JavaScript for robust tooling.",
        category: "Language",
        difficulty: "Intermediate",
        rating: 4.9,
    },
    {
        id: "nodejs",
        name: "Node.js",
        icon: nodejsIcon,
        badge: "Standard",
        description:
            "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
        category: "Backend",
        difficulty: "Intermediate",
        rating: 4.8,
    },
    {
        id: "vite",
        name: "Vite",
        icon: viteIcon,
        badge: "Bundler",
        description:
            "Next-generation frontend tooling providing lightning-fast build and dev environment speeds.",
        category: "Tools",
        difficulty: "Beginner-Friendly",
        rating: 4.9,
    },
];

const Main = () => {
    return (
        <section className="bg-white">
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
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-9 w-9 object-contain"
                                    />

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
                                    className="mt-4 cursor-pointer rounded-lg bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                                >
                                    Add to Stack
                                </button>

                            </div>
                        ))}
                    </div>

                    {/* Stack Sidebar */}
                    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-20">

                        <h3 className="text-lg font-bold text-slate-900">
                            Your Stack
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                            No Technology Selected
                        </p>

                        <div className="mt-4 rounded-lg border border-dashed border-slate-300 py-8 text-center text-xs text-slate-400">
                            Your stack is empty.
                        </div>

                    </aside>

                </div>
            </div>
        </section>
    );
};

export default Main;