'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Lab from '@/components/Lab';
import { useSession } from 'next-auth/react';

function Page() {
  const [Labs, setLabs] = useState([])
  const [Progress, setProgress] = useState([])
  const { data: session } = useSession()

  useEffect(() => {
    fetchlabs()
  }, [])

  useEffect(() => {
    if (session) {
      fetchprogress()
    }
  }, [session])



  const fetchlabs = async () => {
    let res = await fetch("/api/getlabs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let data = await res.json();
    if (res.status === 200) {
      setLabs(data.Labs)
    }
  }

  const fetchprogress = async () => {
    let res = await fetch("/api/getprogress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: session?.user.id })
    })
    let data = await res.json();
    if (res.status === 200) {
      setProgress(data.Progressdata)
    }
  }

  const progressmap = useMemo(() => {
    const map = {};
    if (Progress?.length) {
      Progress.forEach(p => map[p.labId] = p);
    }
    return map
  }, [Progress])


  return (
    <div>
      <div className='text-center poppins-extrabold text-3xl max-[450px]:text-2xl'>Labs</div>
      <div className='p-5 '>
        <div className='poppins-extrabold text-xl max-[450px]:text-base' id='xss'>XSS</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "XSS" && <div key={index} ><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl max-[450px]:text-base mt-10' id='sql'>SQL Injection</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "SQL" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl max-[450px]:text-base mt-10' id='csrf'>CSRF</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "CSRF" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl max-[450px]:text-base mt-10' id='nosql'>NO SQL</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "NOSQL" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
