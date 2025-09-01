
import Link from 'next/link';
import React from 'react'
import { ImLab } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

function Lab(params) {

    const Progress = params.progress;

    return (
        <div className=' h-[10vh] md:h-[9vh] mt-8 w-[90vw] xl:w-[40vw] xl:landscape:h-[12vh] landscape:h-[20vh] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 w-[19%]'><div>{Progress?.completed ? <div className='text-orange-400  max-[450px]:text-xs'>Solved</div> : <div className=' max-[450px]:text-xs'>Lab</div>}</div>{Progress?.completed ? <FaCheck className='text-orange-400 size-3 max-[450px]:hidden' /> : <ImLab className='text-white lg:size-6   max-[450px]:size-3' />}</div>
            <Link href={params.href !== '/Login' ? `/Labs/${params.href}` : '/Login'} className='bg-white h-[10vh] md:h-[9vh] xl:landscape:h-[12vh] landscape:h-[20vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
                <div className='hover:underline max-[450px]:text-xs md:text-lg lg:text-xl xl:text-base'>
                    {params.content}
                </div>
            </Link>
        </div>
    )
}

export default Lab
