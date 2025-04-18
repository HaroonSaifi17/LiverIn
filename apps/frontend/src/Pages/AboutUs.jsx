import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-20 bg-white text-[#000066]">
      {/* Hero Section */}
      <section className="bg-[#000066] text-white py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About WorkAura
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Empowering the future of freelance work through blockchain, verified
            experience, and instant payments in USDT.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Column */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-10">
              At WorkAura, we aim to bridge the gap between talent and
              opportunity by providing a trustful, decentralized platform where
              freelancers can build real portfolios, and clients can hire with
              full confidence.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              We envision a world where verified work experience is transparent,
              immediate, and owned by the freelancer — no middlemen, no delay,
              just proof and payment.
            </p>
          </div>

          {/* Image or Illustration */}
          <div className="flex justify-center">
            <img
              src="/assets/Images/IllustrationImage1.jpeg"
              alt="WorkAura illustration"
              className="max-w-md w-full p-5 bg-black/20 rounded-3xl "
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#f0f4ff] py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#000066]">
            Meet the Team
          </h2>

          <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
            {/* Team Member Card */}
            <div className="bg-white border border-[#ccd5ff] rounded-2xl p-6 shadow-sm">
              <img
                src="/assets/Images/Haroon.jpeg"
                alt="Team Member"
                className="w-44 h-44 rounded-full aspect-square  mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Haroon Saifi</h3>
              <p className="text-[#000066] text-sm">
                Web Developer and Founder of WorkAura
              </p>
            </div>
            <div className="bg-white border border-[#ccd5ff] rounded-2xl p-6 shadow-sm">
              <img
                src="/assets/Images/Bhavya.png"
                alt="Team Member"
                className="w-44 h-44 rounded-full aspect-square mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Bhavya Jindal</h3>
              <p className="text-[#000066] text-sm">
                Founder & Blockchain Architect
              </p>
            </div>

            <div className="bg-white border border-[#ccd5ff] rounded-2xl p-6 shadow-sm">
              <img
                src="/assets/Images/person2.jpg"
                alt="Team Member"
                className="w-44 h-44 rounded-full aspect-square  mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Aariz khan</h3>
              <p className="text-[#000066] text-sm">
                Web Developer and CoFounder of WorkAura
              </p>
            </div>

            <div className="bg-white border border-[#ccd5ff] rounded-2xl p-6 shadow-sm">
              <img
                src="/assets/Images/Ayush.png"
                alt="Team Member"
                className="w-44 h-44 rounded-full aspect-square mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Ayush Bhadouriya</h3>
              <p className="text-[#000066] text-sm">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#000066] text-white py-16 px-6 sm:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to join the WorkAura movement?
          </h2>
          <p className="mb-6 text-lg text-white/80">
            Whether you're a freelancer or a client, we welcome you to
            experience the next-gen platform built for real results.
          </p>
          <button className="bg-white text-[#000066] font-semibold px-6 py-3 rounded-full hover:bg-[#f0f4ff] transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
