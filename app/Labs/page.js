import React from 'react'
import { ImLab } from "react-icons/im";
import Link from 'next/link';
import Lab from '@/components/Lab';

function page() {
  return (
    <div>
      <div className='text-center poppins-extrabold text-3xl'>Labs</div>
      <div className='p-5 '>
        <div className='poppins-extrabold text-xl' id='xss'>XSS</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          <Lab href="/XSS/Xss-lab1" content="Reflected XSS using HTML tags" />
          <Lab href="/XSS/Xss-lab2" content="Reflected XSS using Script tag" />
          <Lab href="/XSS/Xss-lab3" content="Stored XSS into HTML context with nothing encoded" />
          <Lab href="/XSS/Xss-lab4" content="DOM XSS in document.write" />
        </div>
        <div className='poppins-extrabold text-xl mt-10' id='sql'>SQL Injection</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          <Lab href="/SQL/SQL-lab1" content=" SQL injection vulnerability allowing login bypass" />
          <Lab href="/SQL/SQL-lab2" content="SQL injection vulnerability in categories " />
          <Lab href="/SQL/SQL-lab3" content=" SQL injection UNION attack, determining the number of columns returned by the query" />
          <Lab href="/SQL/SQL-lab4" content="SQL injection UNION attack, retrieving data from other tables" />
        </div>
        <div className='poppins-extrabold text-xl mt-10' id='csrf'>CSRF</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          <Lab href="/CSRF/CSRF-lab1" content="CSRF Vulnarabilities in the update profile" />
          <Lab href="/CSRF/CSRF-lab2" content="Change Password without CSRF Token" />
        </div>
        <div className='poppins-extrabold text-xl mt-10' id='nosql'>NO SQL</div>
        <div className='lg:flex lg:gap-10 lg:flex-wrap'>
          <Lab href="/NOSQL/NOSQL-lab1" content="Basic Authentication Bypass" />
          <Lab href="/NOSQL/NOSQL-lab2" content="Extracting Data" />
          <Lab href="/NOSQL/NOSQL-lab3" content="Blind NoSQL Injection" />
        </div>
      </div>
    </div>
  )
}

export default page
