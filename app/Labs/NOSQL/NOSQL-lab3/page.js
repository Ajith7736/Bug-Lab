'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Success from '@/components/Success';
import { useSession } from 'next-auth/react';

function page() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [message, setmessage] = useState("")
  const [success, setsuccess] = useState(false)
  const { data: session } = useSession()


  const handlesubmit = async (data) => {
    await getuser(data)
    if (data.Username === "administrator" && data.Password === "admin39502") {
      setsuccess(true)
    }
    reset()
  }

  const getuser = async (data) => {
    let res = await fetch("/api/nosqlroutes/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let resdata = await res.json();
    if (res.status === 200) {
      setmessage("Login successfull");
    }
    if (res.status === 400) {
      setmessage(resdata.message)
    }
  }

  useEffect(() => {
        if (success) {
            solvedlab()
        }
    }, [success])

    const solvedlab = async () => {
        await fetch("/api/updateprogress", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: session?.user.id, labId: "NOSQL-lab3" })
        })
    }

  return (
    <>
      {success && <>
        <Success />
      </>}
      <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl'>This lab contains a NoSQL injection vulnerability in the login function.
        To solve the lab, perform a <span className="text-red-500">Blind NoSQL injection</span> attack that logs in to the application as the <span className='text-red-500'>administrator</span> user and find the password.U can use tools like Burp suite or Caido.
        <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
      </div>
      <div className='p-5 flex flex-col lg:items-center gap-5'>
        <div className='text-center text-3xl font-bold '>Login</div>
        <form action="" onSubmit={handleSubmit(handlesubmit)} className='flex flex-col gap-5 lg:justify-center lg:flex-wrap'>
          <label htmlFor="username">Username : </label>
          <input type="text" {...register("Username")} id='username' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
          <label htmlFor="password">Password : </label>
          <input type="password" {...register("Password")} id='password' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
          <input type="submit" value="Login" name="" id="" className='bg-[var(--button-color)] font-bold text-xl p-2 rounded-md cursor-pointer' />
        </form>
        {message && <><div className='text-xl '>{message}</div></>}
      </div>
    </>

  )
}

export default page
