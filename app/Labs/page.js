'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Lab from '@/components/Lab';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';

function Page() {
  const [Labs, setLabs] = useState([])
  const [Progress, setProgress] = useState([])
  const { data: session, status } = useSession()
  const [loading, setloading] = useState(false)

  useEffect(() => {
    fetchlabs()
  }, [])

  useEffect(() => {
    if (status == "loading") {
      setloading(true)
    }
  }, [status])

  useEffect(() => {
    if (session) {
      fetchprogress()
    }
  }, [session])



  const fetchlabs = async () => {
    setloading(true)
    let res = await fetch("/api/getlabs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let data = await res.json();
    if (res.status === 200) {
      setLabs(data.Labs)
      setloading(false)
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
      {loading && <Loading />}
      <div className='text-center poppins-extrabold text-3xl max-[450px]:text-2xl'>Labs</div>
      <div className='p-5 '>
        <div className='poppins-extrabold text-xl max-[450px]:text-base' id='xss'>XSS</div>
        <div className='xl:flex lg:gap-10 xl:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "XSS" && <div key={index} ><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl max-[450px]:text-base mt-10' id='sql'>SQL Injection</div>
        <div className='xl:flex lg:gap-10 xl:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "SQL" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl max-[450px]:text-base mt-10' id='csrf'>CSRF</div>
        <div className='xl:flex lg:gap-10 xl:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "CSRF" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl max-[450px]:text-base mt-10' id='nosql'>NO SQL</div>
        <div className='xl:flex lg:gap-10 xl:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "NOSQL" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} progress={progressmap[item.labId]} /></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
