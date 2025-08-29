'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React, { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'

function ProductsPageContent() {
    const [products, setproducts] = useState(null)
    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const category = searchparams.get("category")

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
            router.push("/Labs/SQL/SQL-lab4")
        } else {
            router.push(`/Labs/SQL/SQL-lab4?category=${cat}`)
        }
    }

    return (
        <>
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl'>
                This lab contains a SQL injection vulnerability in the categories.
                To solve the lab, perform a SQL injection <span className="text-red-500">UNION</span> attack that retrieves all usernames and passwords,
                and use the information to log in as the <span className='text-red-500'>administrator</span> user.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>

            <div className='flex gap-3 p-5 w-full justify-end'>
                <Link href={"/Labs/SQL/SQL-lab4"} className={pathname === "/Labs/SQL/SQL-lab4" ? "text-white" : "text-gray-600"}>
                    <div className='cursor-pointer'>Home</div>
                </Link>
                <div className='bg-white/30 w-[1px] h-[20px]'></div>
                <Link href={"/Labs/SQL/SQL-lab4/Login"} className={pathname === "/Labs/SQL/SQL-lab4/Login" ? "text-white" : "text-gray-600"}>
                    <div className='cursor-pointer'>Login</div>
                </Link>
            </div>

            <div className='p-5 flex flex-col gap-6'>
                <div className='text-center text-3xl font-bold'>Products</div>
                <div className='w-full h-[5vh] bg-white/5 rounded-xl flex items-center px-3 gap-5'>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="All" onClick={(e) => setcategory(e.target.id)}>All</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Electronics" onClick={(e) => setcategory(e.target.id)}>Electronics</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Food" onClick={(e) => setcategory(e.target.id)}>Food</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Clothing" onClick={(e) => setcategory(e.target.id)}>Clothing</div>
                    <div className='bg-white/8 p-1 rounded-md border cursor-pointer border-gray-600' id="Furniture" onClick={(e) => setcategory(e.target.id)}>Furniture</div>
                </div>

                {category && <div className='text-center text-2xl font-bold'>Categories of {category}</div>}

                <div className='flex flex-col gap-5'>
                    {products?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <div className='text-lg'>{item.title}</div>
                            <div>{item.description}</div>
                            <div>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi cumque ea sit, maxime quos obcaecati...
                            </div>
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
            <ProductsPageContent />
        </Suspense>
    )
}
