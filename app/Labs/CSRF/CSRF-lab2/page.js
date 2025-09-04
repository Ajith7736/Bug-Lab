"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Success from '@/components/Success';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';

function Page() {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [user, setuser] = useState(null)
    const [errormessage, seterrormessage] = useState("")
    const [password, setpassword] = useState(null)
    const router = useRouter()
    const [success, setsuccess] = useState(false)
    const { data: session } = useSession()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        getpassword()
    }, [])

    useEffect(() => {
        if (password === 'hacked@123') {
            setsuccess(true)
        }
    }, [password])



    const handlesubmit = async (data) => {
        setloading(true)
        await delay(1)
        if (data.Username !== "weiner") {
            await getuser(data)
        } else {
            seterrormessage("Invalid Username or Password")
        }
        setloading(false)
        reset()
    }

    const delay = (t) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve()
            }, t * 1000);
        })
    }

    const getpassword = async () => {
        let res = await fetch("/api/lab-user/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username: "john" })
        })
        let data = await res.json()
        if (res.status === 200) {
            setpassword(data.Password)
        }
    }


    const getuser = async (data) => {
        let res = await fetch("/api/lab-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        let resdata = await res.json();
        if (res.status === 200) {
            setuser(resdata.user)
        }
        if (res.status === 400) {
            seterrormessage(resdata.message)
        }
    }

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify({ id: user.id, Username: user.Username, Email: user.Email }))
            router.push("/Labs/CSRF/CSRF-lab2/Update")
        }
    }, [user])


    useEffect(() => {
        if (success && session?.user?.id) {
            solvedlab()
        }
    }, [success, session])

    const solvedlab = async () => {
        await fetch("/api/updateprogress", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: session?.user.id, labId: "CSRF-lab2" })
        })
    }

    return (
        <>
            {loading && <Loading />}
            {success && <>
                <Success updateuser="true" />
            </>}
            <div className='bg-white/5 z-10 border border-l-0 border-r-0 border-gray-800 text-white font-semibold h-auto p-5 text-xl max-[450px]:text-sm'>This lab contains a CSRF vulnerability in the Update password functionality.
                To solve the lab, First you need to login as user <br />
                <span className="text-red-500">Username</span> : john <br />
                <span className="text-red-500">Password</span> : {password} <br />
                trick the user to visit <span className='bg-gray-200 text-lg max-[450px]:text-xs p-2 max-[450px]:p-1 text-black'>/Labs/CSRF/CSRF-lab2/Evil</span> endpoint.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col lg:items-center'>
                <div className='text-center text-3xl font-bold'>Login</div>
                <form action="" onSubmit={handleSubmit(handlesubmit)} className='flex flex-col gap-5 lg:justify-center lg:flex-wrap'>
                    <label htmlFor="username">Username : </label>
                    <input type="text" {...register("Username")} id='username' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
                    <label htmlFor="password">Password : </label>
                    <input type="password" {...register("Password")} id='password' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
                    <input type="submit" value="Login" name="" id="" className='bg-[var(--button-color)] p-2 font-bold rounded-md cursor-pointer text-lg' />
                </form>
                {errormessage && <div className='text-xl pt-5 text-red-500'>{errormessage}</div>}
            </div>
        </>

    )
}

export default Page
