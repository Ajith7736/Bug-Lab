"use client"
import Image from "next/image";
import { CiDesktopMouse2 } from "react-icons/ci";
import { HiArrowLongDown } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";



export default function Home() {


  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // whether animation should happen only once
    })
  }, [])


  const Labs = [
    {
      Title: "XSS",
      Desc: "XSS is a web security vulnerability where an attacker injects malicious JavaScript into a website, which then runs in the victim’s browser.",
      id: "xss"
    },
    {
      Title: "SQL Injection",
      Desc: "SQL Injection (SQLi) is a web security vulnerability where an attacker tricks an application into running malicious SQL queries by inserting code into user inputs.",
      id: "sql"
    },
    {
      Title: "CSRF",
      Desc: "CSRF (Cross-Site Request Forgery) is a web attack where an attacker tricks a logged-in user’s browser into making unauthorized requests to a web application on the user’s behalf.",
      id: "csrf"
    },
    {
      Title: "NoSQL Injection",
      Desc: "NoSQL Injection is a web security vulnerability that allows attackers to manipulate NoSQL queries to bypass authentication or extract sensitive data.",
      id: "nosql"
    }
  ]


  return (
    <>
      {/* Landing page */}
      <div>
        <div className=" bg-[url(/bg.png)] bg-no-repeat bg-cover lg:bg-position-[center_top] bg-center h-[100vh] w-full absolute top-0 -z-10 left-0"></div>
        <div data-aos="fade-up" className="h-[85vh] w-full flex flex-col items-center justify-center gap-8">
          <div className="text-4xl poppins-extrabold lg:text-5xl max-[450px]:text-3xl max-[380px]:text-2xl text-center">
            Practice Web App <span className="text-[var(--extra-light-button)] animate-pulse">Hacking</span>  in a Safe Lab Environment
          </div>
          <div className="text-lg lg:text-2xl max-[450px]:text-base max-[380px]:text-xs max-[450px]:px-2 text-center poppins-bold">
            Learn, hack, and master vulnerabilities like <span className="text-[var(--extra-light-button)]">SQLi, XSS, CSRF, and more.</span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-white/5 p-3 max-[450px]:p-2 border border-gray-600 rounded-full">
              <CiDesktopMouse2 className="text-white size-6 max-[450px]:size-4 text-center" />
            </div>
            <HiArrowLongDown className="text-white size-6 animate-bounce" />
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="w-full h-auto pt-5 lg:pt-15">
        <div data-aos="fade-up" className="text-3xl lg:text-4xl max-[450px]:text-2xl font-bold text-center poppins-extrabold">Why Use <span className="text-[var(--button-color)]">BugLab</span> ?</div>
        <div className="flex mt-10 flex-col gap-10 items-center md:flex-row md:flex-wrap md:justify-center">
          <div data-aos="fade-up" className="flex flex-col w-[70vw] max-[450px]:h-[28vh] max-[380px]:h-[35vh] h-[43vh] md:h-[30vh] md:w-[45vw] md:justify-center md:gap-8 justify-between xl:h-[40vh] lg:h-[25vh] lg:w-[35vw] bg-white/5 border border-gray-800 p-5 gap-5 max-[450px]:gap-7 max-[450px]:justify-normal items-center text-center rounded-2xl">
            <div className="relative w-28 h-28 max-[450px]:w-20 max-[450px]:h-20">
              <Image
                src="/shield-svgrepo-com.png"
                fill
                className="animate-pulse object-contain"
                alt="Shield Icon"
              />
            </div>

            <div className="text-2xl max-[450px]:text-base poppins-extrabold"> Safe & Legal Labs</div>
            <div className="text-lg max-[450px]:text-xs poppins-extrabold">Practice real vulnerabilities without any legal risks.</div>
          </div>
          <div data-aos="fade-up" className="flex flex-col w-[70vw] max-[450px]:h-[28vh] max-[380px]:h-[35vh] h-[43vh] md:h-[30vh] md:w-[45vw] md:justify-center md:gap-8 justify-between xl:h-[40vh] lg:h-[25vh] lg:w-[35vw] bg-white/5 border border-gray-800 p-5 gap-5 max-[450px]:gap-7 max-[450px]:justify-normal items-center text-center rounded-2xl">
            <div className="relative w-28 h-28 max-[450px]:w-20 max-[450px]:h-20">
              <Image
                src="/brain.png"
                fill
                className="animate-pulse object-contain"
                alt="Shield Icon"
              />
            </div>

            <div className="text-2xl max-[450px]:text-base poppins-extrabold">Beginners Friendly</div>
            <div className="text-lg max-[450px]:text-xs poppins-extrabold">Step-by-step challenges with hints and solutions.</div>
          </div>
          <div data-aos="fade-up" className="flex flex-col w-[70vw] max-[450px]:h-[28vh] max-[380px]:h-[35vh] h-[43vh] md:h-[30vh] md:w-[45vw] md:justify-center md:gap-8 justify-between xl:h-[40vh] lg:h-[25vh] lg:w-[35vw] border-animate-pulse bg-white/5 border border-gray-800 p-5 gap-5 max-[450px]:gap-7 max-[450px]:justify-normal items-center text-center rounded-2xl">
            <div className="relative w-25 h-25 max-[450px]:w-20 max-[450px]:h-20">
              <Image
                src="/sword.png"
                fill
                className="animate-pulse object-contain"
                alt="Shield Icon"
              />
            </div>

            <div className="text-2xl max-[450px]:text-base poppins-extrabold"> Leaderboard & Points</div>
            <div className="text-lg max-[450px]:text-xs poppins-extrabold">Compete with other users and track your progress.</div>
          </div>
          <div data-aos="fade-up" className="flex flex-col w-[70vw] max-[450px]:h-[28vh] max-[380px]:h-[35vh] h-[43vh] md:h-[30vh] md:w-[45vw] md:justify-center md:gap-8 justify-between xl:h-[40vh] lg:h-[25vh] lg:w-[35vw] bg-white/5 border border-gray-800 p-5 gap-5 max-[450px]:gap-7 max-[450px]:justify-normal items-center text-center rounded-2xl">
            <div className="relative w-28 h-28 max-[450px]:w-20 max-[450px]:h-20">
              <Image
                src="/hacker.png"
                fill
                className="animate-pulse object-contain"
                alt="Shield Icon"
              />
            </div>

            <div className="text-2xl max-[450px]:text-base poppins-extrabold"> More Challenges</div>
            <div className="text-lg max-[450px]:text-xs poppins-extrabold">Continuously updated with new and diverse scenarios.</div>
          </div>
        </div>
      </div>
      {/* labs */}
      <div className="section-wrapper">
        <div data-aos="fade-up" className="text-3xl lg:text-4xl max-[450px]:text-2xl max-[450px]:mt-20 mt-10 poppins-extrabold text-center">Explore Vulnerability Labs</div>
        <div className="flex flex-col md:flex-row md:justify-center p-10 gap-8 md:flex-wrap">
          {Labs.map((item, index) => {
            return <div data-aos={(index + 1) % 2 == 0 ? "fade-right" : "fade-left"} key={index} className="bg-white/5 border border-gray-800 hover:border-gray-700 p-4 lg:w-[30vw] rounded-md flex flex-col justify-between gap-3">
              <div className="poppins-extrabold text-2xl max-[450px]:text-lg">{item.Title}</div>
              <div className="text-lg max-[450px]:text-sm">{item.Desc}</div>
              <Link href={`/Labs#${item.id}`} className="flex items-center gap-3 group w-fit">
                <div className="group-hover:text-[var(--button-color)] transition-all 3s 1s ease-in-out max-[450px]:text-sm">Go to topic</div>
                <FaArrowRightLong className="text-white group-hover:translate-x-5 group-hover:text-[var(--button-color)] transition-all 3s 1s ease-in-out" />
              </Link>
            </div>
          })}
        </div>


      </div >
      {/* How to use */}
      < div >
        <div data-aos="fade-up" className="text-3xl max-[450px]:text-2xl text-center poppins-extrabold mt-10 lg:text-4xl">Start in 3 Easy Steps</div>
        <div className="my-10 mx-10 flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-10 items-center">
          <div data-aos="fade-up" className="bg-white/5 p-5 w-[50vw] md:w-[40vw] lg:w-[25vw] md:h-[25vh]  lg:max-h-[35vh] xl:h-[40vh] rounded-xl flex flex-col gap-5 items-center justify-between md:justify-center md:gap-8 border border-gray-800">
            <div className="bg-blue-800 h-15 w-15 max-[450px]:h-10 max-[450px]:w-10 flex justify-center items-center rounded-full">
              <div className="font-bold text-2xl max-[450px]:text-lg">1</div>
            </div>
            <div className="font-bold text-center text-xl max-[450px]:text-base">Create an Account</div>
            <div className="text-center font-medium max-[450px]:text-xs">Sign up with Google,Github or Twitter to get started instantly</div>
          </div>
          <div data-aos="fade-up" className="bg-white/5 p-5 w-[50vw] md:w-[40vw] lg:w-[25vw] md:h-[25vh] lg:max-h-[35vh] xl:h-[40vh] rounded-xl flex flex-col gap-5 items-center justify-between md:justify-center md:gap-8 border border-gray-800">
            <div className="bg-green-700 h-15 w-15 max-[450px]:h-10 max-[450px]:w-10 flex justify-center items-center rounded-full">
              <div className="font-bold text-2xl max-[450px]:text-lg">2</div>
            </div>
            <div className="font-bold text-center text-xl max-[450px]:text-base">Choose a Lab</div>
            <div className="text-center font-medium max-[450px]:text-xs">Pick from a variety of real-world vulnerability labs to practice safely</div>
          </div>
          <div data-aos="fade-up" className="bg-white/5 p-5 w-[50vw] md:w-[40vw] lg:w-[25vw] md:h-[25vh] lg:max-h-[35vh] xl:h-[40vh] rounded-xl flex flex-col gap-5 items-center justify-between  md:justify-center md:gap-8 border border-gray-800">
            <div className="bg-violet-600 h-15 w-15 max-[450px]:h-10 max-[450px]:w-10 flex justify-center items-center rounded-full">
              <div className="font-bold text-2xl max-[450px]:text-lg">3</div>
            </div>
            <div className="font-bold text-center text-xl max-[450px]:text-base">Start Practicing</div>
            <div className="text-center font-medium max-[450px]:text-xs">Learn, experiment, anf improve your skill without legal risks.</div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
}
