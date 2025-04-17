import React from "react";

const Product = () => {
  return (
    <div className="bg-white mt-20 text-[#000066]">
      <section className="bg-[#000066] text-white py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Explore WorkAura's Ecosystem
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            The complete platform to empower freelancers and clients through
            verifiable work and crypto-based payments.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="border border-[#ccd5ff] p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">
                Verifiable Resume
              </h3>
              <p>
                Every completed task is blockchain-stamped and added to your
                WorkAura profile automatically.
              </p>
            </div>
            <div className="border border-[#ccd5ff] p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Earn in SOL</h3>
              <p>
                Get paid in Solana instantly once your task is verified by the
                client. No delays, no middlemen.
              </p>
            </div>
            <div className="border border-[#ccd5ff] p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Smart Profiles</h3>
              <p>
                Dynamic profiles that evolve based on real completed work,
                endorsements, and ratings.
              </p>
            </div>
            <div className="border border-[#ccd5ff] p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">AI Matching</h3>
              <p>
                WorkAura AI connects clients with freelancers best suited to
                their task — saving time and money.
              </p>
            </div>
            <div className="border border-[#ccd5ff] p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">
                Instant Task Feed
              </h3>
              <p>
                Live feed of new tasks with filters by skill, price, duration,
                and blockchain technology.
              </p>
            </div>
            <div className="border border-[#ccd5ff] p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">
                Decentralized Trust
              </h3>
              <p>
                WorkAura is fully transparent. Reputation is built on data, not
                promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f4ff] py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How WorkAura Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">For Freelancers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sign up and build your dynamic profile</li>
                <li>Browse available tasks filtered by your skills</li>
                <li>Submit work and gain blockchain-stamped credentials</li>
                <li>Get paid in $SOL and level up your resume</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">For Clients</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Post your project with detailed requirements</li>
                <li>Let AI recommend verified freelancers</li>
                <li>Track progress and give feedback</li>
                <li>Pay only after successful delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Trusted by Freelancers & Clients Alike
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#edf0ff] p-6 rounded-xl shadow">
              <p className="italic">
                “I landed my first remote gig through WorkAura and the instant
                SOL payment blew my mind!”
              </p>
              <p className="mt-4 font-semibold">- Priya S., Web3 Developer</p>
            </div>
            <div className="bg-[#edf0ff] p-6 rounded-xl shadow">
              <p className="italic">
                “The AI matching saved me hours. My task was completed in a day
                with top quality.”
              </p>
              <p className="mt-4 font-semibold">- Arjun M., Startup Founder</p>
            </div>
            <div className="bg-[#edf0ff] p-6 rounded-xl shadow">
              <p className="italic">
                “Every project I’ve worked on adds value to my WorkAura resume —
                it’s revolutionary.”
              </p>
              <p className="mt-4 font-semibold">- Riya D., UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#000066] text-white py-20 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience WorkAura?
          </h2>
          <p className="text-lg mb-8">
            Sign up now and start earning verified experience while building
            your portfolio.
          </p>
          <button className="bg-white text-[#000066] font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300">
            Get Started For Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Product;
