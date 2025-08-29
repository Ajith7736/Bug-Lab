"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react'


function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [sidebar, setsidebar] = useState(false)
    const sidebarref = useRef()

    // to show sidebar and hide the scroll option
    const handlehandburger = () => {
        setsidebar(true)
        document.body.classList.add('no-scroll');
    }

    // to hide the sidebar
    const handleclose = () => {
        setsidebar(false)
        document.body.classList.remove('no-scroll');
    }


    return (
        <>
            <div className='hidden md:flex justify-between bg-white/5 backdrop-blur-sm rounded-full py-5 px-10 items-center h-[10vh] m-5'>
                <Link href={"/"}><div className='font-bold text-lg lg:text-3xl poppins-extrabold'>Buglab</div></Link>
                <div>
                    <ul className='flex gap-10 font-medium lg:text-lg '>
                        <Link href={"/"} className={pathname === "/" ? "text-white" : "text-gray-500"}><li className='cursor-pointer poppins-extrabold'>Home</li></Link>
                        <Link href={"/Labs"} className={pathname === "/Labs" ? "text-white" : "text-gray-500"}><li className='cursor-pointer poppins-extrabold'>Labs</li></Link>
                        <Link href={"/Leaderboard"} className={pathname === "/Leaderboard" ? "text-white" : "text-gray-500"}><li className='cursor-pointer poppins-extrabold'>Leaderboard</li></Link>
                    </ul>
                </div>
                <div className=''>
                    {session ? <div className='flex gap-5 items-center'><img className='w-11 h-11 rounded-full' src={session?.user.image} alt="" /> <button className='bg-[var(--button-color)] px-6 py-3 lg:px-10 rounded-full font-bold cursor-pointer hover:bg-[var(--button-color)]/90' onClick={() => signOut()}>Logout</button></div> : <Link href={"/Login"}><button className='bg-[var(--button-color)] px-6 py-3 lg:px-10 rounded-full font-bold cursor-pointer hover:bg-[var(--button-color)]/90'>Login</button></Link>}
                </div>
            </div>
            {/* mobile nav */}
            <div className='flex md:hidden justify-between bg-white/5 backdrop-blur-sm rounded-full py-5 px-10 items-center h-[10vh] m-5'>
                <GiHamburgerMenu className='size-6 max-[450px]:size-4 cursor-pointer' onClick={handlehandburger} />
                <Link href={"/"}><div className='font-bold text-2xl lg:text-3xl poppins-extrabold max-[450px]:text-sm'>Buglab</div></Link>
                <div className='hidden'>
                    <ul className='flex gap-10 font-medium lg:text-lg '>
                        <Link href={"/"} className={pathname === "/" ? "text-white" : "text-gray-500"}><li className='cursor-pointer'>Home</li></Link>
                        <Link href={"/Labs"} className={pathname === "/Labs" ? "text-white" : "text-gray-500"}><li className='cursor-pointer'>Labs</li></Link>
                        <Link href={"/Leaderboard"} className={pathname === "/Leaderboard" ? "text-white" : "text-gray-500"}><li className='cursor-pointer'>Leaderboard</li></Link>
                    </ul>
                </div>
                <div className=''>
                    {session ? <div className='flex gap-5 items-center'><img src={session.user.image} className='w-11 h-11 max-[450px]:w-8 max-[450px]:h-8 rounded-full' alt="" /><button className='bg-[var(--button-color)] px-6 py-3 max-[450px]:px-4 max-[450px]:py-2 lg:px-10 rounded-full font-bold cursor-pointer hover:bg-[var(--button-color)]/90 max-[450px]:text-sm max-[380px]:text-xs poppins-semibold' onClick={() => signOut()}>Logout</button></div> : <Link href={"/Login"}><button className='bg-[var(--button-color)] px-6 py-3 max-[450px]:px-4 max-[450px]:py-2 lg:px-10 rounded-full font-bold cursor-pointer hover:bg-[var(--button-color)]/90 max-[450px]:text-sm max-[380px]:text-xs'>Login</button></Link>}
                </div>
            </div>
            {/* sidebar */}
            <div ref={sidebarref} className={`bg-gray-950/80 backdrop-blur-xl border-r-2 border-gray-900 md:hidden w-[60vw] h-full p-10 absolute top-0 z-1 shadow-xl flex flex-col gap-8 transition-all duration-500 ${sidebar ? 'left-0' : '-left-[100vw]'}`}>
                <div className='flex justify-end'>
                    <IoMdClose className='size-6 cursor-pointer' onClick={handleclose} />
                </div>
                <Link href={"/"} className={pathname === "/" ? "text-black bg-white rounded-lg" : "text-white"}><div className='text-xl max-[450px]:text-base  p-4 rounded-xl poppins-extrabold' onClick={handleclose}> Home </div></Link>
                <Link href={"/Leaderboard"} className={pathname === "/Leaderboard" ? "text-black bg-white rounded-lg" : "text-white"}><div className='text-xl max-[450px]:text-base poppins-extrabold  p-4 rounded-xl' onClick={handleclose}>Leaderboard </div></Link>
                <Link href={"/Labs"} className={pathname === "/Labs" ? "text-black bg-white rounded-lg" : "text-white"}><div className='text-xl max-[450px]:text-base poppins-extrabold  p-4 rounded-xl' onClick={handleclose}>Labs </div></Link>
            </div >
        </>
    )
}

export default Navbar
