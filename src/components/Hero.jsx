import React from 'react';
import bannerImg from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    <div className="flex flex-col gap-6 text-center md:text-left">

                        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Build Your Ideal <br />
                            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mx-auto max-w-md text-base text-gray-500 sm:text-lg md:mx-0">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack
                            that fits your next project.
                        </p>

                        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row md:justify-start">

                            <button type="button" className="cursor-pointer rounded-lg bg-linear-to-r from-pink-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90" >
                                Explore Technologies
                            </button>

                            <button type="button" id="hero-learn-more-btn" className="cursor-pointer rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-slate-50" >
                                Learn More
                            </button>

                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img
                            src={bannerImg}
                            alt="Development stack illustration"
                            className="w-full max-w-md drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;