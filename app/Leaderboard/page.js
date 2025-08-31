'use client'
import React, { useEffect, useState } from 'react'

function Page() {
  const [userdata, setuserdata] = useState(null)

  const getscore = async () => {
    let res = await fetch("/api/getscore", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let data = await res.json();
    if (res.status === 200) {
      setuserdata(data)
    }
  }

  useEffect(() => {
    getscore()
  }, [])


  return (
    <div className='px-5'>
      <div className='text-3xl max-[450px]:text-xl poppins-extrabold text-center'>Leaderboard</div>
      <div className='flex flex-col lg:items-center mb-10'>
        {
          userdata?.map((item, index) => {
            return <div key={index} className='bg-white/5 mt-10 h-[8vh] lg:w-[60vw] rounded-full p-5 flex items-center border border-gray-800 justify-between'>
              <div className='bg-white/10 h-10 w-10 rounded-full flex items-center justify-center border max-[450px]:text-sm border-gray-700 font-bold'>{1 + index}</div>
              <div className='text-xl max-[450px]:text-sm'>{item.Username}</div>
              <div className='text-xl max-[450px]:text-sm'>{item.Score}/260</div>
            </div>
          })

        }
      </div>
    </div>
  )
}

export default Page
