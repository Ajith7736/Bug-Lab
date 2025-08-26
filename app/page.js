import Image from "next/image";
import Navbar from "@/components/Navbar";
import { CiDesktopMouse2 } from "react-icons/ci";
import { HiArrowLongDown } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "@/components/footer";
import Link from "next/link";



export default function Home() {

  const Labs = [
    {
      Title: "XSS",
      Desc: "XSS is a web security vulnerability where an attacker injects malicious JavaScript into a website, which then runs in the victim’s browser.",
      id : "xss"
    },
    {
      Title: "SQL Injection",
      Desc: "SQL Injection (SQLi) is a web security vulnerability where an attacker tricks an application into running malicious SQL queries by inserting code into user inputs.",
      id : "sql"
    },
    {
      Title: "CSRF",
      Desc: "CSRF (Cross-Site Request Forgery) is a web attack where an attacker tricks a logged-in user’s browser into making unauthorized requests to a web application on the user’s behalf.",
      id : "csrf"
    },
    {
      Title: "NoSQL Injection",
      Desc: "NoSQL Injection is a web security vulnerability that allows attackers to manipulate NoSQL queries to bypass authentication or extract sensitive data.",
      id : "nosql"
    }
  ]


  return (
    <>
      {/* Landing page */}
      <div>
        <div className=" bg-[url(/bg.png)] bg-no-repeat bg-cover lg:bg-position-[center_top] bg-center h-[100vh] w-full absolute top-0 -z-10 left-0"></div>
        <div className="h-[85vh] w-full flex flex-col items-center justify-center gap-8">
          <div className="text-4xl poppins-extrabold lg:text-5xl text-center">
            Practice Web App <span className="text-[var(--extra-light-button)]">Hacking</span>  in a Safe Lab Environment
          </div>
          <div className="text-lg lg:text-2xl text-center poppins-bold">
            Learn, hack, and master vulnerabilities like <span className="text-[var(--extra-light-button)]">SQLi, XSS, CSRF, and more.</span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-white/5 p-3 border border-gray-600 rounded-full">
              <CiDesktopMouse2 className="text-white size-6 text-center" />
            </div>
            <HiArrowLongDown className="text-white size-6 animate-bounce" />
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="w-full h-auto pt-5 lg:pt-15">
        <div className="text-3xl lg:text-4xl font-bold text-center poppins-extrabold">Why Use <span className="text-[var(--button-color)]">BugLab</span> ?</div>
        <div className="flex mt-10 flex-col gap-10 items-center lg:flex-row lg:flex-wrap lg:justify-center">
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/shield-svgrepo-com.png" className="size-30" alt="" /></div>
            <div className="text-2xl poppins-extrabold"> Safe & Legal Labs</div>
            <div className="text-lg poppins-extrabold">Practice real vulnerabilities without any legal risks.</div>
          </div>
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/brain.png" className="size-30" alt="" /></div>
            <div className="text-2xl poppins-extrabold">Beginners Friendly</div>
            <div className="text-lg poppins-extrabold">Step-by-step challenges with hints and solutions.</div>
          </div>
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/sword.png" className="size-28" alt="" /></div>
            <div className="text-2xl poppins-extrabold"> Leaderboard & Points</div>
            <div className="text-lg poppins-extrabold">Compete with other users and track your progress.</div>
          </div>
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/hacker.png" className="size-28" alt="" /></div>
            <div className="text-2xl poppins-extrabold"> Admin-Added Challenges</div>
            <div className="text-lg poppins-extrabold">Continuously updated with new and diverse scenarios.</div>
          </div>
        </div>
      </div>
      {/* labs */}
      <div>
        <div className="text-3xl lg:text-4xl mt-10 poppins-extrabold text-center">Explore Vulnerability Labs</div>
        <div className="flex flex-col md:flex-row md:justify-center p-10 gap-8 md:flex-wrap">
          {Labs.map((item, index) => {
            return <div key={index} className="bg-white/5 border border-gray-800 p-4 lg:w-[30vw] rounded-md flex flex-col gap-3">
              <div className="poppins-extrabold text-2xl ">{item.Title}</div>
              <div className="text-lg">{item.Desc}</div>
              <Link href={`/Labs#${item.id}`} className="flex items-center gap-3 group">
                <div className="group-hover:text-[var(--button-color)] transition-all 3s 1s ease-in-out">Go to topic</div>
                <FaArrowRightLong className="text-white group-hover:translate-x-5 group-hover:text-[var(--button-color)] transition-all 3s 1s ease-in-out" />
              </Link>
            </div>
          })}
        </div>


      </div>
      {/* How to use */}
      <div>
        <div className="text-3xl text-center poppins-extrabold mt-10 lg:text-4xl">Start in 3 Easy Steps</div>
        <div className="pl-10 mt-10 text-xl poppins-extrabold lg:text-3xl">Steps:</div>
        <div className="pl-10 mt-5 flex flex-col gap-6 text-lg lg:text-2xl">
          <div>1. <span className="poppins-extrabold">Sign Up</span> – Create your free account.</div>
          <div>2. <span className="poppins-extrabold">Choose a Challenge</span> – Pick a lab based on difficulty.</div>
          <div>3. <span className="poppins-extrabold">Start Hacking</span> – Use your skills to complete it and earn points.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
