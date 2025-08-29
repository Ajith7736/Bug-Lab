'use client'
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


function page() {
    const [products, setproducts] = useState(null)
    const searchparams = useSearchParams()
    const router = useRouter()
    const [success, setsuccess] = useState(false)
    const category = searchparams.get("category")
    const { data: session } = useSession()



    useEffect(() => {
        getproducts()
    }, [category])

    const getproducts = async () => {
        let url = "/api/products"
        if (category) {
            url += `?category=${encodeURIComponent(category)}`
        }
        let res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();
        if (res.status === 200) {
            setproducts(data.products)
        }
    }


    const setcategory = async (cat) => {
        if (cat == "All") {
            router.push("/Labs/SQL/SQL-lab2")
        } else {
            router.push(`/Labs/SQL/SQL-lab2?category=${cat}`)
        }
    }

    useEffect(() => {
        products?.find((item) => {
            if (item.hidden === 1) {
                return setsuccess(true)
            }
        })
    }, [products])

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
            body: JSON.stringify({ userId: session?.user.id, labId: "SQL-lab2" })
        })
    }


    return (
        <>
            {success && <><div><Success /></div></>}
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl'>This lab contains a SQL injection vulnerability in the categories.
                To solve the lab, perform a SQL injection attack that shows all the <span className='text-red-500'>hidden products</span> also.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col gap-6'>
                <div className='text-center text-2xl font-bold'>Products</div>
                <div className='w-full h-[5vh] bg-white/5 rounded-xl flex items-center px-3 gap-5'>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="All" onClick={(e) => setcategory(e.target.id)}>All</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Electronics" onClick={(e) => { setcategory(e.target.id) }}>Electronics</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Food" onClick={(e) => { setcategory(e.target.id) }}>Food</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Clothing" onClick={(e) => { setcategory(e.target.id) }}>Clothing</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Furniture" onClick={(e) => { setcategory(e.target.id) }}>Furniture</div>
                </div>
                {category && <><div className='text-center text-2xl font-bold'>Categories of {category}</div></>}
                <div className='flex flex-col gap-5'>
                    {products?.map((item, index) => {
                        return <div key={index} className='flex flex-col gap-2'>
                            <div className='text-lg'>{item.title}</div>
                            <div>{item.description}</div>
                            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cumque ea sit, maxime quos obcaecati quibusdam quo, rem ullam tenetur labore magni fugit. Quisquam ea sapiente est eius totam dignissimos, velit quis libero quibusdam voluptate error? Excepturi obcaecati dolores aut qui culpa itaque sapiente voluptatibus maiores deserunt similique? Ad debitis eligendi minima officiis repellat reprehenderit provident ea porro fuga animi?</div>
                            <div className='bg-gray-700 w-full h-[1px]'></div>
                        </div>
                    })}

                </div>
            </div>
        </>

    )
}

export default page
