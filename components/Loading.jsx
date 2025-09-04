import React from 'react'

function Loading() {
    return (
        <div className="flex items-center fixed top-0 justify-center h-full z-10 bg-black/50 w-[100vw]">
            <div className="w-9 h-9 border-5 border-gray-200 border-t-[var(--button-color)] rounded-full animate-spin"></div>
        </div>

    )
}

export default Loading
