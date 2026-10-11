import React from 'react';

const Loading = () => {
    return (
        <div role="status" className="flex min-h-64 flex-col items-center justify-center gap-4" >
            <div aria-hidden="true" 
            className="h-9 w-9 animate-spin rounded-full border-3 border-slate-200 border-t-pink-500 border-r-purple-500 motion-reduce:animate-none" />
            <p className="text-sm font-medium text-gray-400">
                Loading information...
            </p>
        </div>
    );
};

export default Loading;