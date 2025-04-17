import React from "react";

const CurvedPhone = () => {
  return (
    <div className="flex justify-center items-center p-8">
      {/* Outer Phone Container */}
      <div className="bg-zinc-800 rounded-3xl shadow-xl overflow-hidden w-74 max-w-sm aspect-w-9 aspect-h-16 flex flex-col">
        {/* Top Notch/Earpiece Area */}
        <div className="bg-zinc-800 h-4 flex justify-center items-center relative">
          {/* <div className="w-12 h-1 rounded-full bg-zinc-400"></div>{" "} */}
          {/* Earpiece */}
          {/* Optional: Front Camera Dot */}
          <div className="absolute left-1/2 -translate-x-1 top-1 w-2 h-2 rounded-full bg-zinc-300"></div>
        </div>

        {/* Phone Screen Area */}
        <div className="bg-white inset-shadow-sm shadow-black border-l-2 border-r-2 rounded-xl rounded-tl-[30px] rounded-tr-[30px] flex-grow overflow-hidden flex flex-col justify-start items-center p-4 box-border">
          {/* App Bar/Header */}
          <div className="bg-gray-100 w-full rounded-md p-3 flex justify-between items-center mb-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-semibold text-lg text-gray-700">
              WorkAura
            </span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>

          {/* Content Area (Replace with your Hackathon UI) */}
          <div className="flex py-12 flex-col items-center justify-center flex-grow w-full text-center text-gray-600 text-sm">
            <img
              src="/assets/Images/women'sProfilePic.jpg"
              alt="Logo"
              className="rounded-full w-[140px] h-[140px] object-cover shadow-md mb-5"
            />
            <h2 className="font-semibold text-lg mb-2">
              Connect & Earn with Crypto
            </h2>
            <p className="mb-5">
              Find freelance gigs and talent. Payments in BNB & USDT.
            </p>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1">
              Get Started
            </button>
            {/* More UI elements can go here */}
          </div>

          {/* Bottom Navigation Bar (Optional) */}
          <div className="bg-gray-100 w-full rounded-md p-1 mt-2 flex justify-around items-center">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l2-2m-2 2v-1a1 1 0 00-1-1h-3m1 1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 011 1h10a1 1 0 011-1v-1m-2-2l7-7"
              />
            </svg>
            <svg
              className="w-6 h-6 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 12h3m-3 3h3m-3-3h-3M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-3-6 9.863 9.863 0 013-6c4.97 0 9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Chin/Speaker Area (Optional) */}
        <div className="bg-zinc-800 h-3 rounded-b-3xl flex justify-center items-center">
          <div className="w-16 h-1 rounded-full bg-zinc-400"></div>
        </div>
      </div>
    </div>
  );
};

export default CurvedPhone;
