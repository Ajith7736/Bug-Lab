'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

function Page() {
    const inputref = useRef();
    const { data: session } = useSession()
    const [errormessage, seterrormessage] = useState("")
    const router = useRouter()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        if (!session) {
            router.push("/Login")
        }
    }, [session])



    const setusername = async (Username) => {
        let res = await fetch("/api/setusername", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username, Email: session.user.email })
        })
        let data = await res.json()
        if (res.status === 200) {
            router.push("/Labs")
        }
        if (res.status === 400 || res.status === 500) {
            seterrormessage(data.message)
        }
    }

    const handlesubmit = async () => {
        setloading(true)
        await delay(2)
        const username = inputref?.current.value;
        await setusername(username)
        setloading(false)
    }

    const delay = (t) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, t * 1000);
        })
    }

    return (
        <>
            {loading && <Loading />}
            <div className='p-5 flex flex-col  gap-5'>
                <div className='text-xl poppins-bold'>Enter your Username:</div>
                <input type="text" ref={inputref} className='bg-white/5 focus:outline-none p-2 rounded-lg border border-gray-800' />
                <input type="submit" onClick={handlesubmit} className='bg-[var(--button-color)] p-2 rounded-md poppins-bold cursor-pointer hover:bg-[var(--button-color)]/90' />
                {errormessage && <><div className='text-xl'>{errormessage}</div></>}
            </div>
        </>
    )
}

export default Page
