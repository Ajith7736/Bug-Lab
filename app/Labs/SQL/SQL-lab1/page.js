'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Success from '@/components/Success';

function page() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [message, setmessage] = useState("")
    const [success, setsuccess] = useState(false)


    const handlesubmit = (data) => {
        getuser(data)
        reset()
    }

    const getuser = async (data) => {
        let res = await fetch("/api/sql-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        let resdata = await res.json();
        if (res.status === 200) {
            setmessage(resdata.message);
            setsuccess(true)
        }
        if (res.status === 400) {
            setmessage(resdata.message)
        }
    }

    return (
        <>
            {success && <>
                <Success />
            </>}
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl'>This lab contains a SQL injection vulnerability in the login function.
                To solve the lab, perform a SQL injection attack that logs in to the application as the <span className='text-red-500'>administrator</span> user.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col lg:items-center gap-5'>
                <div className='text-center text-3xl font-bold '>Login</div>
                <form action="" onSubmit={handleSubmit(handlesubmit)} className='flex flex-col gap-5 lg:justify-center lg:flex-wrap'>
                    <label htmlFor="username">Username : </label>
                    <input type="text" {...register("username")} id='username' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
                    <label htmlFor="password">Password : </label>
                    <input type="password" {...register("password")} id='password' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
                    <input type="submit" value="login" name="" id="" className='bg-[var(--button-color)] p-2 rounded-md cursor-pointer' />
                </form>
                {message && <><div className='text-xl '>{message}</div></>}
            </div>
        </>

    )
}

export default page
