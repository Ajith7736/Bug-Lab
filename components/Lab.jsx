import Link from 'next/link';
import React from 'react'
import { ImLab } from "react-icons/im";

function Lab(params) {
    return (
        <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={`/Labs/${params.href}`} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
                <div className='hover:underline'>
                    {params.content}
                </div>
            </Link>
        </div>
    )
}

export default Lab
