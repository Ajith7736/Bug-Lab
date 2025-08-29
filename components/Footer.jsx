import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";


function Footer() {
    return (
        <div className='mt-10 bg-white/5 border-t border-gray-700 p-5 w-full'>
            <div className='w-full flex justify-center gap-6'>
                <FaFacebook className='size-8 max-[450px]:size-4 cursor-pointer' />
                <AiFillGoogleCircle className='size-9 max-[450px]:size-4 cursor-pointer' />
                <FaInstagramSquare className='size-9 max-[450px]:size-4 cursor-pointer' />
                <AiFillTwitterSquare className='size-9 max-[450px]:size-4 cursor-pointer' />
            </div>
            <div className='text-center mt-5 max-[450px]:text-xs'>© Copyright 2025 Lorem ipsum dolor sit</div>
        </div>
    )
}

export default Footer

