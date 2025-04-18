import FeatureCard from "@/components/initials/FeatureCard";
import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineLoop } from "react-icons/md";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoRocket } from "react-icons/io5";
const Features = () => {
  return (
    <div className="mt-20 bg-white text-[#000066]">
      {/* Hero Section */}
      <section className="bg-[#000066] text-white py-20 px-6 sm:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">WorkAura Features</h1>
          <p className="text-lg text-white/80">
            A powerful suite of tools that connect clients and freelancers in a
            trustworthy, blockchain-powered ecosystem.
          </p>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            All-in-One Work Experience Platform
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              title="Verified Work History"
              desc="Freelancers gain verified project experience, automatically added to their WorkAura profile."
            />
            <FeatureCard
              title="Blockchain-Stamped Resume"
              desc="Every task completed is immutably stored, showcasing real results — not just claims."
            />
            <FeatureCard
              title="Smart Matching"
              desc="Clients are algorithmically matched with freelancers whose track record fits their task."
            />
            <FeatureCard
              title="Instant USDT Payouts"
              desc="No wait times or transaction delays. Get paid the moment a client verifies the task."
            />
            <FeatureCard
              title="Dynamic Profiles"
              desc="Profiles evolve with each task. Showcase endorsements, ratings, categories, and skills."
            />
            <FeatureCard
              title="Scam-Free Collaboration"
              desc="Escrow and blockchain proof ensure both freelancers and clients are protected."
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-[#f0f4ff] py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Why WorkAura is Different
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              We've combined trustless tech with human creativity. Our platform
              ensures both parties win, always.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl flex text-center items-center text-black gap-2 font-semibold mb-3">
                <TbTargetArrow className="text-[#000066]" /> Proof of Skill, Not
                Just Words
              </h3>
              <p>
                Gone are the days of inflated resumes. Clients see real projects
                freelancers have completed — verified by WorkAura.
              </p>
            </div>
            <div>
              <h3 className="text-2xl flex  text-center items-center gap-2 text-black font-semibold mb-3">
                <MdOutlineLoop className="text-[#000066]" /> Continuous
                Credibility
              </h3>
              <p>
                The more you work, the stronger your profile gets. From new
                skills to public endorsements, you grow with every task.
              </p>
            </div>
            <div>
              <h3 className="text-2xl flex text-center items-center  text-black gap-2 font-semibold mb-3">
                <BsFillSuitcaseLgFill className="text-[#000066]" />
                Decentralized Proof of Work
              </h3>
              <p>
                All records are publicly verifiable. You can take your WorkAura
                resume anywhere as cryptographic proof of what you've done.
              </p>
            </div>
            <div>
              <h3 className="text-2xl flex  text-center items-center gap-2 text-black font-semibold mb-3">
                <IoRocket className="text-[#000066]"/> Built for Modern
                Freelancers
              </h3>
              <p>
                Web3 developers, designers, and AI specialists — WorkAura is
                tailored to the tools and tech of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-[#000066] text-white py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Explore WorkAura — Where Your Work Speaks for You
          </h2>
          <p className="mb-6 text-lg">
            Sign up today and start building a career with real, verifiable
            proof of your expertise.
          </p>
          <button className="bg-white text-[#000066] font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;