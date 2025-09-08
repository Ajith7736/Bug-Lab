"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'

function Page() {
  const [alerttriggered, setalerttriggered] = useState(false)
  const router = useRouter();
  const [name, setname] = useState("")
  const [submittedname, setsubmittedname] = useState("")
  const { data: session } = useSession()

  // overriding the alert so that we know that an alert is being called

  useEffect(() => {
    const originalalert = window.alert;

    window.alert = function (message) {
      setalerttriggered(true)
      console.log("Alert was triggerred")
      originalalert(message)
      setsubmittedname("")
    }

    return () => {
      window.alert = originalalert
    }
  }, [])


  const handlesubmit = () => {
    setsubmittedname(name)
  }

  useEffect(() => {
    if (alerttriggered && session?.user?.id) {
      solvedlab()
    }
  }, [alerttriggered, session])

  const solvedlab = async () => {
    await fetch("/api/updateprogress", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: session?.user.id, labId: "XSS-lab1" })
    })
  }


  return (
    <>
      {alerttriggered && <>
        <Success />
      </>}
      <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl max-[450px]:text-sm'>This web page contains a <span className='text-red-500'>xss</span> vulnarability in the input field.So exploit this vulnerability to show an <span className='text-red-500'>alert box</span> in the page.
        <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
      </div>
      <div className='p-5 flex flex-col gap-5 lg:items-center'>
        <div className='text-xl font-semibold lg:text-2xl'>Enter your name</div>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
        <input type="submit" className='bg-[var(--button-color)] p-2 rounded-lg font-bold lg:w-[10vw] hover:bg-[var(--button-color)]/90 cursor-pointer' onClick={handlesubmit} />
      </div>

      {submittedname && <>
        <div className='ml-5 text-xl font-semibold'>Hi, Welcome to the web page <span dangerouslySetInnerHTML={{ __html: submittedname }} className='text-[var(--button-color)]'></span></div>
      </>}
    </>
  )
}

export default Page
