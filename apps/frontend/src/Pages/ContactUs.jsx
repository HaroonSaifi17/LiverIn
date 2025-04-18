
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div className=" bg-white text-[#000066]">
      <section className="bg-[#000066] text-white py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in Touch with WorkAura
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Whether you're a freelancer, client, or curious mind — we’re here to
            help. Reach out to us through any of the options below.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl flex justify-center items-center gap-2  font-bold mb-2"><FaLocationDot/> Our Office</h3>
            <p className="text-lg">123 Blockchain Reserve, Delhi, India</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">📧 Email Us</h3>
            <p className="text-lg">support@workaura.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">📞 Call Us</h3>
            <p className="text-lg">+91 88513 86250</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f4ff] py-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Send Us a Message
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="border border-[#ccd5ff] rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="border border-[#ccd5ff] rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="border border-[#ccd5ff] rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="What’s this about?"
                className="border border-[#ccd5ff] rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label className="mb-2 font-medium">Your Message</label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="border border-[#ccd5ff] rounded-lg p-3"
              ></textarea>
            </div>

            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#000066] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#1a1a80] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

   
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6">
            <div>
              <h4 className="font-semibold text-xl mb-2">
                How do I register on WorkAura?
              </h4>
              <p className="text-gray-700">
                Simply click on the “Get Started” button at the top, sign up
                using your email or wallet, and begin exploring tasks and
                opportunities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-2">
                Is WorkAura free to use?
              </h4>
              <p className="text-gray-700">
                Yes! We do not charge freelancers or clients any subscription
                fees. Platform usage is free with optional premium perks.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-2">
                Can I withdraw my USDT earnings instantly?
              </h4>
              <p className="text-gray-700">
                Yes. Once a task is verified and completed, USDT payments are
                processed immediately to your connected wallet.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-2">
                Where is WorkAura based?
              </h4>
              <p className="text-gray-700">
                We are a remote-first team with contributors across India, but
                our registered headquarters is in Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
