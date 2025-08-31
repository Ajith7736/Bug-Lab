"use client"
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, Suspense } from 'react'

function ProductsPage() {
    const [products, setproducts] = useState(null)
    const searchparams = useSearchParams()
    const category = searchparams.get("category")
    const router = useRouter()
    const [success, setsuccess] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        getproducts()
    }, [category])

    const getproducts = async () => {
        let url = "/api/products"
        if (category) {
            url += `?category=${encodeURIComponent(category)}`
        }
        let res = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } })
        let data = await res.json()
        if (res.status === 200) setproducts(data.products)
    }

    const setcategory = (cat) => {
        if (cat == "All") router.push("/Labs/SQL/SQL-lab2")
        else router.push(`/Labs/SQL/SQL-lab2?category=${cat}`)
    }

    useEffect(() => {
        products?.find((item) => {
            if (item.hidden === 1) setsuccess(true)
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: session?.user.id, labId: "SQL-lab2" })
        })
    }

    return (
        <>
            {success && <div><Success /></div>}
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl max-[450px]:text-sm'>
                This lab contains a SQL injection vulnerability in the categories.
                To solve the lab, perform a SQL injection attack that shows all the <span className='text-red-500'>hidden products</span>.
                <div>⚠️ Deliberately vulnerable for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col gap-6'>
                <div className='text-center text-2xl font-bold'>Products</div>
                <div className='w-full min-h-[5vh] bg-white/5 rounded-xl flex flex-wrap  max-[450px]:gap-2 items-center px-3 gap-5 border border-gray-800'>
                    {["All", "Electronics", "Food", "Clothing", "Furniture"].map(cat => (
                        <div key={cat} className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600 max-[450px]:text-xs'
                            id={cat} onClick={() => setcategory(cat)}>
                            {cat}
                        </div>
                    ))}
                </div>
                {category && <div className='text-center text-2xl font-bold'>Categories of {category}</div>}
                <div className='flex flex-col gap-5'>
                    {products?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <div className='text-lg max-[450px]:text-base'>{item.title}</div>
                            <div className='max-[450px]:text-sm'>{item.description}</div>
                            <div className='max-[450px]:text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, omnis eaque. Eaque natus cupiditate voluptate dolorem nemo sapiente laboriosam ex magni modi similique!</div>
                            <div className='bg-gray-700 w-full h-[1px]'></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// ✅ Wrap Page inside Suspense
export default function PageWrapper() {
    return (
        <Suspense fallback={<div className="text-white p-5">Loading...</div>}>
            <ProductsPage />
        </Suspense>
    )
}
