'use client'
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'


function Page() {
  const [products, setproducts] = useState(null)
  const [success, setsuccess] = useState(false)
  const [category, setcategory] = useState(null)
  const { data: session } = useSession()


  useEffect(() => {
    if (category !== "internal") {
      getproducts()
    }
  }, [category])

  useEffect(() => {
    products?.find((item) => {
      if (item.Category === "internal") {
        setsuccess(true)
      }
    })
  }, [products])


  const getproducts = async () => {
    let res = await fetch("/api/nosqlroutes/getproducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Category: category })
    });
    let data = await res.json();
    if (res.status === 200) {
      setproducts(data.products)
    }
  }

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
      body: JSON.stringify({ userId: session?.user.id, labId: "NOSQL-lab2" })
    })
  }




  return (
    <>
      {success && <><div><Success /></div></>}
      <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl max-[450px]:text-sm'>
        This lab contains a NoSQL injection vulnerability in the categories.
        <br />
        Your goal: Exploit the injection so that hidden <span className='text-red-500'>internal products</span> are also displayed.
        <div>⚠️ Deliberately vulnerable. Educational use only.</div>
      </div>

      <div className='p-5 flex flex-col gap-6'>
        <div className='text-center text-2xl font-bold'>Products</div>
        <div className='w-full h-[6vh] border border-gray-800  bg-white/5 rounded-xl flex items-center py-2 px-3 gap-5'>
          {["Electronics", "Toys", "Fashion", "Sports", "Wholesale"].map(cat => (
            <div className='bg-white/8 p-1 max-[450px]:text-sm rounded-md border cursor-pointer border-gray-600' id={cat} onClick={() => { setcategory(cat.toLowerCase()) }}>{cat}</div>
          ))}
        </div>
        {category && <><div className='text-center text-2xl font-bold max-[450px]:text-xl'>Categories of {category.toUpperCase()}</div></>}
        <div className='flex flex-col gap-5'>
          {products?.map((item, index) => {
            return <div key={index} className='flex flex-col gap-2'>
              <div className='text-lg max-[450px]:text-base'>{item.Title}</div>
              <div className='max-[450px]:text-sm'>{item.Description}</div>
              <div className='max-[450px]:text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cumque ea sit, maxime quos obcaecati quibusdam quo, rem ullam tenetur labore magni fugit. Quisquam ea sapiente est eius totam dignissimos, velit quis libero quibusdam voluptate error? Excepturi obcaecati dolores aut qui culpa itaque sapiente voluptatibus maiores deserunt similique? Ad debitis eligendi minima officiis repellat reprehenderit provident ea porro fuga animi?</div>
              <div className='bg-gray-700 w-full h-[1px]'></div>
            </div>
          })}

        </div>
      </div>
    </>

  )
}

export default Page

