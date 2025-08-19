"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function page() {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [comments, setcomments] = useState(null)
    const router = useRouter();
    const [alerttriggered, setalerttriggered] = useState(false)

    const onSubmit = async (data) => {
        await submitcomment(data)
        await getcomment();
        reset();
    }


    useEffect(() => {
        const originalalert = window.alert;

        window.alert = function (message) {
            setalerttriggered(true);
            originalalert(message)
        }
    }, [])

    useEffect(() => {
        getcomment()
    }, [])




    const submitcomment = async (data) => {
        let res = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    const getcomment = async () => {
        let res = await fetch("/api/comments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await res.json()
        if (res.status === 200) {
            setcomments(data.comments)
        }
    }


    const required = () => {
        return { required: { value: true, message: "This field is required" } }
    }


    return (
        <>
            {alerttriggered && <>
                <div className='text-xl font-bold -top-20 p-4 absolute w-full shadow-2xl bg-gray-900 success-message flex justify-between items-center'>Successfully completed this lab <Link href={"/Labs"} className='bg-white/5 p-2 rounded-lg border border-gray-600'>Go back</Link></div>
            </>}
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl'>This web page contains a <span className='text-red-500'>XSS</span> vulnarability in the <span className='text-red-500'>Post Comment</span> field.So exploit this vulnerability to show an <span className='text-red-500'>Alert box</span> in the page.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col lg:items-center'>
                <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='Name' className='text-lg'>First Name</label>
                    <input type="text" {...register("Name",required())} id='Name' className='bg-white/5 lg:w-[40vw] p-2 rounded-md border border-gray-800 focus:outline-none' />
                    {errors.Name && <><div className='text-red-500'>{errors.Name.message}</div></>}
                    <label htmlFor='Email' className='text-lg'>Your Email</label>
                    <input type="Email" {...register("Email",required())} id='Email' className='bg-white/5 lg:w-[40vw] p-2 rounded-md border border-gray-800 focus:outline-none' />
                    {errors.Email && <><div className='text-red-500'>{errors.Email.message}</div></>}
                    <label htmlFor='Website' className='text-lg'>Website</label>
                    <input type="text" {...register("Website",required())} id='Website' className='bg-white/5 lg:w-[40vw] p-2 rounded-md border border-gray-800 focus:outline-none' />
                    {errors.Website && <><div className='text-red-500'>{errors.Website.message}</div></>}
                    <label htmlFor='Message' className='text-lg'>Message</label>
                    <textarea name="" {...register("Message",required())} id="Message" className='bg-white/5 lg:w-[40vw] p-2 rounded-md border border-gray-800 focus:outline-none h-[20vh]'></textarea>
                    {errors.Message && <><div className='text-red-500'>{errors.Message.message}</div></>}
                    <input type="submit" value="Post Comment" id="" className='bg-[var(--button-color)] lg:w-[40vw] p-2 rounded-md font-bold cursor-pointer' />
                    <input type="reset" className='border border-red-500 lg:w-[40vw] rounded-md cursor-pointer p-2' />
                </form>
                <div className='mt-10 text-center text-xl font-bold'>Comments</div>
                {comments?.length === 0 && <div className='text-center font-semibold my-10'>There are no comments</div>}
                {comments?.map((item, index) => {
                    return <div key={index} className='bg-white/5 min-h-[20vh] lg:w-[50vw] p-5 border border-gray-800 rounded-xl mt-10 flex flex-col gap-5'>
                        <div className='flex items-center gap-3'>
                            <div className="relative w-8 h-8  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                            <div className='font-semibold'>{item.Name}</div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: item.Message }}>
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default page
