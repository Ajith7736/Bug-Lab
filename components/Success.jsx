import React from 'react'
import Link from 'next/link'

function Success() {
  return (
    <div>
      <div className='text-xl font-bold -top-20 p-4 absolute w-full shadow-2xl bg-gray-900 success-message flex justify-between items-center'>Successfully completed this lab <Link href={"/Labs"} className='bg-white/5 p-2 rounded-lg border border-gray-600'>Go back</Link></div>
    </div>
  )
}

export default Success
