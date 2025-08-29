'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Page() {
    const [user, setuser] = useState(null)
    const [successmessage, setsuccessmessage] = useState("")
    const [errormessage, seterrormessage] = useState(null)

    useEffect(() => {
      const storeduser = localStorage.getItem("user");
      if(storeduser){
        setuser(JSON.parse(localStorage.getItem("user")))
      }
    }, [])

    
    const handlesubmit = async (e) => {
        e.preventDefault();
        const currentpassword = e.target.currentpassword.value;
        const newpassword = e.target.newpassword.value
        await updatepassword(currentpassword,newpassword);
    }

    const updatepassword = async (currentpassword,newpassword) => {
        let res = await fetch("/api/lab-user/updatepassword",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({Userid : user.id , currentpassword , newpassword})
        })
        let data = await res.json();
        if(res.status === 200){
            setuser(data.updateduser);
            setsuccessmessage(data.message)
        }
        if(res.status === 400 || res.status === 500){
            seterrormessage(data.message)
        }
    }


    return (
        <div className='p-5'>
            <div className='text-center text-2xl font-bold'>Update Password</div>
            <form onSubmit={handlesubmit} className='flex flex-col gap-4 mt-6  lg:items-center'>
                <div className='lg:w-[40vw] flex flex-col gap-4'>
                    <label htmlFor='currentpassword'>Current Password :</label>
                    <input type="text" id='currentpassword' name='currentpassword' placeholder='Enter your current password' className='bg-white/5  p-2 w-full rounded-xl border border-gray-800 focus:outline-none' />
                </div>
                <div className='lg:w-[40vw] flex flex-col gap-4'>
                    <label htmlFor='newpassword'>New Password :</label>
                    <input type="text" id='newpassword' name='newpassword' placeholder='Enter your new password' className='bg-white/5 w-full p-2 rounded-xl border border-gray-800 focus:outline-none' />
                </div>
                <input type="submit" className='lg:w-[40vw] cursor-pointer bg-[var(--button-color)] hover:bg-[var(--button-color)]/90 p-2 font-bold rounded-lg w-full' />
            </form>
            {successmessage && <><div className='text-lg mt-6 text-green-500'>{successmessage}</div><Link href={"/Labs/CSRF/CSRF-lab2"} className='underline  hover:text-white/90'>Go back to login</Link></>}
            {errormessage && <><div className='text-lg mt-6 text-red-500'>{errormessage}</div></>}
        </div>
    )
}

export default Page
