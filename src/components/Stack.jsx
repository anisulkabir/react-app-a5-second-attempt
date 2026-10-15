import React from 'react';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';

const Stack = ({ stackedTechnologies, setStackedTechnologies }) => {
    const count = stackedTechnologies.length;
    const handleRemoveFromStack = (id) => {
        setStackedTechnologies((current) => current.filter((item) => item.id !== id));
        toast.info('Technology removed from stack');

    };

    return (
         <aside className="h-fit w-full rounded-xl border border-gray-200 bg-white p-4 lg:sticky lg:top-24 lg:w-62.5">
            <h2 className="text-sm font-bold text-gray-800">
                Your Stack
            </h2>

            <p className="mt-1 text-xs text-gray-400">
                {count} {count === 1 ? "technology" : "technologies"} selected
            </p>

            <div className="mt-5 flex flex-col gap-2">
                {stackedTechnologies.map((tech) => (
                    <div
                        key={tech.id}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 p-2"
                    >
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-6 w-6 shrink-0 object-contain"
                        />

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold text-gray-800">
                                {tech.name}
                            </p>

                            <p className="text-xs text-gray-400">
                                {tech.category}
                            </p>
                        </div>

                        <button
                            type="button"
                            aria-label={`Remove ${tech.name}`}
                            onClick={() => handleRemoveFromStack(tech.id)}
                            className="cursor-pointer rounded p-1 text-gray-400 transition-colors hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                        >
                            <X size={16} aria-hidden="true" />
                        </button>
                    </div>
                ))}
            </div>

            {count > 0 && (
                <button
                    type="button"
                    onClick={() => setStackedTechnologies([])}
                    className="mt-4 w-full cursor-pointer rounded-md border border-red-200 py-2 text-xs font-semibold text-red-500 transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white"
                >
                    Remove All
                </button>
            )}
        </aside>
    );
};

export default Stack;