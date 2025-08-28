'use client'
import React, { useEffect, useState } from 'react'
import { ImLab } from "react-icons/im";
import Link from 'next/link';
import Lab from '@/components/Lab';
import { useSession } from 'next-auth/react';

function page() {
  const [Labs, setLabs] = useState([])

  const { data: session } = useSession()

  useEffect(() => {
    fetchlabs()
  }, [])


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
      console.log(data.Labs)
    }
  }

  return (
    <div>
      <div className='text-center poppins-extrabold text-3xl'>Labs</div>
      <div className='p-5 '>
        <div className='poppins-extrabold text-xl' id='xss'>XSS</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "XSS" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl mt-10' id='sql'>SQL Injection</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "SQL" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl mt-10' id='csrf'>CSRF</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "CSRF" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} /></div>
          })}
        </div>
        <div className='poppins-extrabold text-xl mt-10' id='nosql'>NO SQL</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          {Labs?.map((item, index) => {
            return item.category === "NOSQL" && <div key={index}><Lab href={session ? `${item.path}` : "/Login"} content={item.title} /></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default page
