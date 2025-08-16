import React from 'react'
import { ImLab } from "react-icons/im";
import Link from 'next/link';

function page() {
  return (
    <div>
      <div className='text-center font-bold text-3xl'>Labs</div>
      <div className='p-5 '>
        <div className='font-semibold text-xl'>XSS</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 bg-white/5 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={"/Labs/Xss-lab1"} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
              <div className='hover:underline'>
                Reflected XSS using HTML tags
              </div>
            </Link>
          </div>
          <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 bg-white/5 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={"/Labs/Xss-lab2"} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
              <div className='hover:underline'>
                Reflected XSS using Script tag
              </div>
            </Link>
          </div>
          <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 bg-white/5 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={"/Labs/Xss-lab3"} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
              <div className='hover:underline'>
                Stored XSS into HTML context with nothing encoded
              </div>
            </Link>
          </div>
          <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 bg-white/5 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={"/Labs/Xss-lab4"} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
              <div className='hover:underline'>
                DOM XSS in document.write
              </div>
            </Link>
          </div>
        </div>
        <div className='font-semibold text-xl mt-10'>SQL Injection</div>
        <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 bg-white/5 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={"/Labs/SQL-lab1"} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
              <div className='hover:underline'>
                SQL injection vulnerability allowing login bypass 
              </div>
            </Link>
          </div>
          <div className=' h-[10vh] mt-8 w-[90vw] lg:w-[40vw] border border-gray-800 rounded-full flex items-center justify-evenly'>
            <div className='flex gap-4 items-center m-10 bg-white/5 w-[15%]'><div>Lab</div><ImLab className='text-white size-6' /></div>
            <Link href={"/Labs/SQL-lab2"} className='bg-white h-[10vh] w-[80%] rounded-r-full text-black flex items-center p-2 font-bold cursor-pointer' >
              <div className='hover:underline'>
                SQL injection vulnerability in categories 
              </div>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default page
