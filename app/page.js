import Image from "next/image";
import Navbar from "@/components/Navbar";
import { CiDesktopMouse2 } from "react-icons/ci";
import { HiArrowLongDown } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "@/components/footer";
import Link from "next/link";



export default function Home() {
  return (
    <>
      {/* Landing page */}
      <div>
        <div className=" bg-[url(/bg.png)] bg-no-repeat bg-cover lg:bg-position-[center_top] bg-center h-[100vh] w-full absolute top-0 -z-10 left-0"></div>
        <div className="h-[85vh] w-full flex flex-col items-center justify-center gap-8">
          <div className="text-4xl font-bold lg:text-5xl text-center">
            Practice Web App <span className="text-[var(--extra-light-button)]">Hacking</span>  in a Safe Lab Environment
          </div>
          <div className="text-lg lg:text-2xl text-center">
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
        <div className="text-3xl lg:text-4xl font-bold text-center">Why Use <span className="text-[var(--button-color)]">BugLab</span> ?</div>
        <div className="flex mt-10 flex-col gap-10 items-center lg:flex-row lg:flex-wrap lg:justify-center">
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/shield-svgrepo-com.png" className="size-30" alt="" /></div>
            <div className="text-2xl font-bold"> Safe & Legal Labs</div>
            <div className="text-lg font-medium">Practice real vulnerabilities without any legal risks.</div>
          </div>
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/brain.png" className="size-30" alt="" /></div>
            <div className="text-2xl font-bold">Beginners Friendly</div>
            <div className="text-lg font-medium">Step-by-step challenges with hints and solutions.</div>
          </div>
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/sword.png" className="size-28" alt="" /></div>
            <div className="text-2xl font-bold"> Leaderboard & Points</div>
            <div className="text-lg font-medium">Compete with other users and track your progress.</div>
          </div>
          <div className="flex flex-col w-[70vw] lg:w-[20vw] bg-white/5 border border-gray-800 p-5 gap-5 items-center text-center rounded-2xl">
            <div><img src="/hacker.png" className="size-28" alt="" /></div>
            <div className="text-2xl font-bold"> Admin-Added Challenges</div>
            <div className="text-lg font-medium">Continuously updated with new and diverse scenarios.</div>
          </div>
        </div>
      </div>
      {/* labs */}
      <div>
        <div className="text-3xl lg:text-4xl mt-10 font-bold text-center">Explore Vulnerability Labs</div>
        <ul className="mt-10 text-xl font-medium pl-20 gap-10 flex flex-col items-start">
          <li className="group hover:underline cursor-pointer hover:text-[var(--button-color)] flex items-center gap-3 transition-all delay-75 duration-200 ease-in-out">SQL Injection <FaArrowRightLong className="transition-all delay-75 duration-200 ease-in-out group-hover:translate-x-5" /></li>
          <li className="group hover:underline cursor-pointer hover:text-[var(--button-color)] flex items-center gap-3 transition-all delay-75 duration-200 ease-in-out">XSS <FaArrowRightLong className="transition-all delay-75 duration-200 ease-in-out group-hover:translate-x-5" /></li>
          <li className="group hover:underline cursor-pointer hover:text-[var(--button-color)] flex items-center gap-3 transition-all delay-75 duration-200 ease-in-out">CSRF <FaArrowRightLong className="transition-all delay-75 duration-200 ease-in-out group-hover:translate-x-5" /></li>
          <li className="group hover:underline cursor-pointer hover:text-[var(--button-color)] flex items-center gap-3 transition-all delay-75 duration-200 ease-in-out">No SQL Injection <FaArrowRightLong className="transition-all delay-75 duration-200 ease-in-out group-hover:translate-x-5" /></li>
          <Link href={"/Labs"}><li className="group hover:underline cursor-pointer hover:text-[var(--button-color)] flex items-center gap-3 transition-all delay-75 duration-200 ease-in-out">All labs ... <FaArrowRightLong className="transition-all delay-75 duration-200 ease-in-out group-hover:translate-x-5" /></li></Link>
        </ul>
      </div>
      {/* leaderboard preview */}
      <div className="mt-15 flex flex-col items-center">
        <div className="text-3xl lg:text-4xl font-bold text-center">Top Hackers this week</div>
        <table className="mt-10 w-[80vw]">
          <thead>
            <tr className="border border-t-0 border-l-0 border-r-0 border-gray-700 lg:text-2xl">
              <th scope="col" className="px-6 py-1">Rank</th>
              <th scope="col" className="px-20 py-1">Username</th>
              <th scope="col" className="px-10 py-1">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-t-0 border-l-0 border-r-0 border-gray-800 lg:text-xl">
              <td className="px-6 py-3 text-center">1🥇</td>
              <td className="px-20 text-center">ajith_aju</td>
              <td className="px-10 text-center">3000</td>
            </tr>
            <tr className="border border-t-0 border-l-0 border-r-0 border-gray-800 lg:text-xl">
              <td className="px-6 py-3 text-center">2🥈</td>
              <td className="px-20 text-center">nullbyte_23</td>
              <td className="px-10 text-center">2900</td>
            </tr>
            <tr className="border border-t-0 border-l-0 border-r-0 border-gray-800 lg:text-xl">
              <td className="px-6 py-3 text-center">3🥉</td>
              <td className="px-20 text-center">cyberwolf</td>
              <td className="px-10 text-center">2700</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href={"/Leaderboard"}><div className="group flex w-fit items-center gap-3 pl-10 lg:pl-35 mt-5 hover:text-[var(--button-color)] cursor-pointer lg:text-xl hover:underline transition-hover delay-100 duration-200 ">More...<FaArrowRightLong className="transition-all delay-100 duration-200 group-hover:translate-x-5 ease-in-out" /></div></Link>
      {/* How to use */}
      <div>
        <div className="text-3xl text-center font-bold mt-10 lg:text-4xl">Start in 3 Easy Steps</div>
        <div className="pl-10 mt-10 text-xl font-bold lg:text-3xl">Steps:</div>
        <div className="pl-10 mt-5 flex flex-col gap-6 text-lg lg:text-2xl">
          <div>1. <span className="font-bold">Sign Up</span> – Create your free account.</div>
          <div>2. <span className="font-bold">Choose a Challenge</span> – Pick a lab based on difficulty.</div>
          <div>3. <span className="font-bold">Start Hacking</span> – Use your skills to complete it and earn points.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
