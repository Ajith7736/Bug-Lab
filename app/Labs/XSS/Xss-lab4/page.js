"use client"
import Success from '@/components/Success'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function Page() {
    const [inputvalue, setinputvalue] = useState(null)
    const [alerttriggered, setalerttriggered] = useState(false)
    const { data: session } = useSession()



    const handlesubmit = () => {
        const name = document.getElementById("name").value;
        const output = document.getElementsByClassName("output")[0]


        output.innerHTML = `Hi , Welcome to the page ${name}`

        setinputvalue(name)
    }

    useEffect(() => {
        const originalalert = window.alert;

        window.alert = function (message) {
            setalerttriggered(true);
            originalalert(message)
        }
    }, [])

    useEffect(() => {
        if (alerttriggered && session?.user?.id) {
            solvedlab()
        }
    }, [alerttriggered, session])

    const solvedlab = async () => {
        await fetch("/api/updateprogress", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: session?.user.id, labId: "XSS-lab4" })
        })
    }


    return (
        <div>
            {alerttriggered && <>
                <Success />
            </>}
            <div className='bg-white/5 z-10 text-white border border-l-0 border-r-0 border-gray-800 font-semibold h-auto p-5 text-xl max-[450px]:text-sm'>This web page contains a <span className='text-red-500'>XSS</span> vulnarability in the <span className='text-red-500'>Input</span> field.So exploit this vulnerability to show an <span className='text-red-500'>Alert box</span> in the page.
                <div>⚠️ This is a deliberately vulnerable application built for educational purposes only.</div>
            </div>
            <div className='p-5 flex flex-col gap-5 lg:items-center'>
                <div className='text-xl font-semibold lg:text-2xl'>Enter your name</div>
                <input type="text" id='name' className=' bg-white/5 w-full lg:w-[40vw] p-2 rounded-xl border border-gray-800 focus:outline-none' />
                <input type="submit" className='bg-[var(--button-color)] p-2 rounded-lg font-bold lg:w-[10vw] hover:bg-[var(--button-color)]/90 cursor-pointer' onClick={handlesubmit} />
            </div>
            <div className='output text-xl pl-5 font-bold'></div>
            {inputvalue && (
                <div dangerouslySetInnerHTML={{ __html: `<img src="${inputvalue}">` }} />
            )}

        </div>
    )
}

export default Page
