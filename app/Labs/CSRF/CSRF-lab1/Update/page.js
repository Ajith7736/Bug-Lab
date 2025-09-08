'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'

function Page() {

  const [user, setuser] = useState(null)
  const router = useRouter()
  const [Email, setEmail] = useState("")
  const inputref = useRef()
  const [success, setsuccess] = useState(false)
  const { data: session } = useSession()



  // get user data from localstorage

  useEffect(() => {
    setuser(localStorage.getItem("user"))
  }, [])

  // get userdata from the database when the user changes

  useEffect(() => {
    if (user) {
      getuser()
    }
  }, [user])

  // check whether the email is hacked or not

  useEffect(() => {
    if (Email === "hacked@evil.com") {
      setsuccess(true)
    }
  }, [Email])

  // fetch user data from the dummydata collection

  const getuser = async () => {
    let res = await fetch("/api/lab-user/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Username: user })
    })
    let resdata = await res.json();
    if (res.status === 200) {
      setEmail(resdata.Email)
    }
  }

  // update the email of the specific user 

  const updateEmail = async (data) => {
    let res = await fetch("/api/lab-user/update-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Email: data, Username: user })
    })
    let resdata = await res.json();
    if (res.status === 200) {
      setEmail(resdata.updateduser.Email)
    }
  }

  // submit the Email entered

  const handlesubmit = () => {
    updateEmail(inputref.current.value)
    inputref.current.value = ""
  }

  // set the lab solved when success is true and there is id in the session

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
      body: JSON.stringify({ userId: session?.user.id, labId: "CSRF-lab1" })
    })
  }

  return (
    <>
      {success && <>
        <Success />
      </>}
      <div className='p-5 flex flex-col lg:items-center'>
        <div className='text-2xl font-bold text-center'>Update Email</div>
        <div className='bg-white/5 h-[40vh] flex flex-col justify-center gap-3 text-lg mt-10 p-10 lg:w-[50vw] rounded-xl border border-gray-900'>
          <div>Username : {user}</div>
          <div>Email : {Email}</div>
          <input type="text" ref={inputref} placeholder='Enter new Email' className='bg-white/5 w-full p-2 rounded-xl border border-gray-800 focus:outline-none' />
          <input type="submit" className='cursor-pointer bg-[var(--button-color)] p-1 font-bold rounded-lg w-full' onClick={handlesubmit} />
        </div>
      </div>
    </>

  )
}

export default Page
