'use client'
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, Suspense } from 'react'

function ProductsPage() {
    const [products, setproducts] = useState(null)
    const searchparams = useSearchParams()
    const router = useRouter()
    const [success, setsuccess] = useState(false)
    const category = searchparams.get("category")
    const [error, seterror] = useState(null)
    const { data: session } = useSession()

    // set the success true when the payload typed by the user is same

    useEffect(() => {
        getproducts()
        if (category?.includes("ORDER BY 5 --") || category?.includes("UNION SELECT NULL,NULL,NULL,NULL,NULL --")) {
            setsuccess(true)
        }
    }, [category])

    const getproducts = async () => {
        let url = "/api/products"
        if (category) {
            url += `?category=${encodeURIComponent(category)}`
        }
        let res = await fetch(url)
        let data = await res.json()
        if (res.status === 200) setproducts(data.products)
        if (res.status === 500) seterror(data.message)
    }

    const setcategory = (cat) => {
        if (cat === "All") {
            router.push("/Labs/SQL/SQL-lab3")
        } else {
            router.push(`/Labs/SQL/SQL-lab3?category=${cat}`)
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: session?.user.id, labId: "SQL-lab3" })
        })
    }

    return (
        <>
            {success && <div><Success /></div>}
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl max-[450px]:text-sm'>
                To solve the lab, determine the number of columns returned by the query by performing a SQL injection <span className="text-red-500">ORDER BY</span> or <span className='text-red-500'>UNION ATTACK</span> attack.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col gap-6'>
                <div className='text-center text-2xl font-bold'>Products</div>
                <div className='w-full min-h-[5vh] bg-white/5 rounded-xl flex max-[450px]:gap-2 items-center px-3 gap-5 border border-gray-800'>
                    {["All", "Electronics", "Food", "Clothing", "Furniture"].map((cat) => (
                        <div key={cat} className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600 max-[450px]:text-xs'
                            id={cat}
                            onClick={() => setcategory(cat)}>{cat}</div>
                    ))}
                </div>
                {error ? <div className='text-red-500 text-xl'>{error}</div> : category && <div className='text-center text-2xl font-bold'>Categories of {category}</div>}
                <div className='flex flex-col gap-5'>
                    {products?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <div className='text-lg max-[450px]:text-base'>{item.title}</div>
                            <div className='max-[450px]:text-sm'>{item.description}</div>
                            <div className='max-[450px]:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam ipsa, rerum quibusdam neque officiis! Alias eveniet ut, at mollitia ratione voluptatum blanditiis.</div>
                            <div className='bg-gray-700 w-full h-[1px]'></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default function Page() {
    return (
        <Suspense fallback={<div className="text-white p-5">Loading...</div>}>
            <ProductsPage />
        </Suspense>
    )
}
