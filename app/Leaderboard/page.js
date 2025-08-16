import React from 'react'

function page() {
  return (
    <div className='px-5'>
      <div className='text-3xl font-bold text-center'>Hall of fame</div>
      <div className='flex flex-col lg:items-center'>
        <div className='bg-white/5 mt-10 h-[8vh] lg:w-[60vw] rounded-full p-5 flex items-center border border-gray-800 justify-between'>
          <div className='bg-white/10 h-10 w-10 rounded-full flex items-center justify-center border border-gray-700 font-bold'>1</div>
          <div className='text-xl'>ajith_aju</div>
          <div className='text-xl'>270/270</div>
        </div>
        <div className='bg-white/5 mt-10 h-[8vh] lg:w-[60vw] rounded-full p-5 flex items-center border border-gray-800 justify-between'>
          <div className='bg-white/10 h-10 w-10 rounded-full flex items-center justify-center border border-gray-700 font-bold'>2</div>
          <div className='text-xl'>roshan raj</div>
          <div className='text-xl'>260/270</div>
        </div>
      </div>
    </div>
  )
}

export default page
