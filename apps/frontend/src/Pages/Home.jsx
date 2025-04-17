import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaRegCircleCheck } from "react-icons/fa6";
import CurvedPhone from '@/components/ui/CurvedPhone';

const Home = () => {
  return (
    <div className="relative isolate  ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-9/11 items-center sm:py-0 py-10 gap-2 flex flex-col lg:flex-row justify-between">
        <div className="">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Beta live – claim your profile today.{" "}
              <NavLink className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Work. Earn. Grow — All Verified.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Earn verified experience as you go, and get paid with zero extra
              fees — thanks to Solana.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </NavLink>
              <NavLink className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </div>
        <CurvedPhone />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="relative w-full h-[500px] md:h-[450px] lg:h-[500px] bg-[#000066] overflow-hidden">
        {/* Background SVGs */}
        <img
          src="/assets/Shapes/wave-haikei.svg"
          alt="bg"
          className="absolute -top-20 left-0 object-cover z-0"
        />
        <img
          src="/assets/Shapes/wave-haikei-2.svg"
          alt="bg"
          className="absolute -bottom-20 left-0 w-full object-cover z-0"
        />

        {/* Decorative group image */}
        <img
          src="/assets/Images/Group.svg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt=""
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 sm:px-8 md:px-16">
          <div className="text-white text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
              COMPLETE <span className="text-red-700">TASKS!</span>
            </h2>
            <p className="text-base sm:text-lg">
              Get paid in <span className="text-red-500">$SOL</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
              <p>✓ No credit card</p>
              <p>✓ No spam</p>
              <p>✓ No hassle</p>
            </div>
            <div className="flex w-full max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Your Email"
                className="bg-white flex-1 rounded-l-md border border-r-0 text-gray-800 py-2 px-3"
              />
              <button className="bg-white/40 backdrop-blur-3xl text-green-500 font-semibold px-4 py-2 border border-white rounded-r-md hover:bg-white/20 cursor-pointer transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 pb-40 mt-20 flex justify-center items-center bg-gradient-to-r from-[#B322FF] to-[#000066]">
        <div className="w-11/12 max-w-7xl flex flex-col items-center justify-center gap-10 px-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">
            Who Is WorkAura For?
          </h2>

          <div className="flex flex-col md:flex-row gap-12 md:gap-28 w-full justify-around text-white">
            {/* Freelancers */}
            <div className="flex-1">
              <p className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
                For Freelancers
              </p>
              <div className="space-y-3 text-base sm:text-lg">
                <div className="flex items-center gap-2">
                  <FaRegCircleCheck />
                  <p>Earn in Solana</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCircleCheck />
                  <p>Add verified work to your resume</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCircleCheck />
                  <p>Grow your career with proof-based achievements</p>
                </div>
              </div>
            </div>

            {/* Clients */}
            <div className="flex-1">
              <p className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
                For Clients
              </p>
              <div className="space-y-3 text-base sm:text-lg">
                <div className="flex items-center gap-2">
                  <FaRegCircleCheck />
                  <p>Hire with confidence</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCircleCheck />
                  <p>Trust verified past performance</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCircleCheck />
                  <p>Build a talent pool with proven results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-20 sm:py-24 overflow-hidden">
        {/* Decorative Background SVG */}
        <img
          src="/assets/Shapes/wave-haikei-3.svg"
          alt="background wave"
          className="absolute h-[80%] object-cover bg-blue-50 w-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              HOW WorkAura WORKS?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Browse freelancers who’ve got all the generative AI platforms down
              to get your idea up and running.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="rounded-full border-2 border-gray-900 w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-900">
                1
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Find Tasks
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Browse freelance gigs posted by clients
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="rounded-full border-2 border-gray-900 w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-900">
                2
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Complete Work
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Deliver tasks and get approval
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="rounded-full border-2 border-gray-900 w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-900">
                3
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Get Verified
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Your task gets added to your resume automatically
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="rounded-full border-2 border-gray-900 w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-900">
                4
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Get Paid in $SOL
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Instantly receive your payout
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 py-16 sm:py-24 overflow-hidden">
        {/* Subtle Background Pattern (Optional) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,55,72,0.2)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Why Choose <span className="text-teal-300">US</span>?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1: No Fake Resumes */}
            <div className="p-6 rounded-lg bg-black/20 backdrop-blur-md border border-teal-500/20">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">
                <span className="inline-block mr-2 text-teal-400">
                  {/* Futuristic Icon - Replace with your actual icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM10 7v6l5 3-1-2-4-2V7z" />
                  </svg>
                </span>
                No Fake Resumes
              </h3>
              <p className="text-sm text-gray-300">
                <span className="text-red-400 font-semibold">
                  Every experience entry
                </span>{" "}
                is verified.
              </p>
            </div>

            {/* Feature 2: Get Paid Instantly */}
            <div className="p-6 rounded-lg bg-black/20 backdrop-blur-md border border-purple-500/20">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">
                <span className="inline-block mr-2 text-purple-400">
                  {/* Futuristic Icon - Replace with your actual icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-8h-8v-2h8v2zM8 8h8v2H8V8z" />
                  </svg>
                </span>
                Get Paid Instantly
              </h3>
              <p className="text-sm text-gray-300">
                <span className="text-lime-400 font-semibold">
                  Direct crypto-wallet
                </span>{" "}
                integration.
              </p>
            </div>

            {/* Feature 3: Decentralized Trust */}
            <div className="p-6 rounded-lg bg-black/20 backdrop-blur-md border border-indigo-500/20 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                <span className="inline-block mr-2 text-indigo-400">
                  {/* Futuristic Icon - Replace with your actual icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-2-3v-2h4v2h-4zm0-4v-2h4v2h-4z" />
                  </svg>
                </span>
                Decentralized Trust
              </h3>
              <p className="text-sm text-gray-300">
                Powered by{" "}
                <span className="text-cyan-400 font-semibold">
                  transparency
                </span>{" "}
                and{" "}
                <span className="text-cyan-400 font-semibold">blockchain</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home