import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Success() {
  const pathname = usePathname();

  const handleclick = async () => {
    if (pathname === "/Labs/CSRF/CSRF-lab2") {
      await fetch("/api/lab-user/updatepassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ currentpassword: "whatever", newpassword: "peter" }),
        credentials: "include"
      })
    } else if (pathname === "/Labs/CSRF/CSRF-lab1/Update") {
      await fetch("/api/lab-user/update-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Email: "weiner123@gmail.com", Username: "weiner" }),
        credentials: "include"
      })
    } else if (pathname === "/Labs/XSS/Xss-lab3") {
      await fetch("/api/comments",{
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json"
        }
      })
    }
  }

  return (
    <div>
      <div className='text-xl max-[450px]:text-sm font-bold -top-20 p-4 absolute w-full shadow-2xl bg-gray-900 success-message flex justify-between items-center'>Successfully completed this lab <Link href={"/Labs"} className='bg-white/5 p-2 rounded-lg border border-gray-600' onClick={handleclick}>Go back</Link></div>
    </div>
  )
}

export default Success
