// src/pages/FreelancerProfile.jsx
import { useParams } from "react-router-dom";
import { freelancers } from "../data/freelancer";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { sendUSDT } from "@/utils/crypto";


const dummyGigs = [
  { title: "Write a 1000-word SEO blog", price: 1290 },
  { title: "Design a modern logo", price: 2990 },
  { title: "Develop a responsive React app", price: 4590 },
];
const mockExperiences = [
  {
    title: "Content Writer at BlogHive",
    duration: "Jan 2022 - Present",
    description:
      "Created over 300 SEO-optimized blog posts across various niches including tech, finance, and lifestyle.",
  },
  {
    title: "Frontend Developer at PixelForge",
    duration: "Aug 2021 - Dec 2022",
    description:
      "Worked on responsive UI components using React and Tailwind CSS, boosting UX engagement by 40%.",
  },
  {
    title: "Graphic Designer at ArtCore Studio",
    duration: "Mar 2020 - July 2021",
    description:
      "Designed branding kits, logos, and social media creatives for over 50 clients globally.",
  },
];


const FreelancerProfile = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  const freelancer = freelancers.find((f) => f.name === decodedName);

  if (!freelancer)
    return <div className="text-center mt-10">Freelancer not found</div>;
  const convertINRtoUSDT = (inrAmount, inrToUsdtRate = 83) => {
    if (!inrAmount || isNaN(inrAmount)) return 0;
    return (inrAmount / inrToUsdtRate).toFixed(2);
  };
  return (
    <>
      <Navbar />
      <div className="w-11/12 max-w-5xl mx-auto mt-20">
        <div className="flex flex-col sm:flex-row gap-6 items-start border-b pb-6">
          <img
            src={freelancer.imgUrl}
            alt={freelancer.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">{freelancer.name}</h2>
            <p className="text-gray-600">{freelancer.tagline}</p>
            <p className="text-sm text-gray-500">{freelancer.location}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {freelancer.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>Wallet Id: 0x70aC332BF065C6280dCFCA510392D25A8271e163</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Gigs by {freelancer.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dummyGigs.map((gig, i) => (
            <div className="flex justify-between p-4 border rounded-md shadow-sm hover:shadow-md">
              <div key={i} className=" flex flex-col gap-3">
                <h4 className="text-lg font-medium">{gig.title}</h4>
                <div className="text-md gap-2 font-bold text-gray-500 mt-1">
                  <p>₹{gig.price}</p>
                  <div className="flex mt-3 gap-2">
                    <img
                      src="/assets/Logo/tether.png"
                      className=" w-6 h-6 rounded-full  bg-blend-color-burn"
                      alt=""
                    />
                    <p>{convertINRtoUSDT(gig.price)}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={sendUSDT}
                className="py-2 px-3 rounded-lg border bg-blue-400 hover:bg-blue-500 text-white font-semibold"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h4 className="font-semibold text-lg mb-4">Experience</h4>
          <div className="flex flex-col gap-4">
            {mockExperiences.map((exp, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                <h5 className="text-md font-semibold">{exp.title}</h5>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold text-lg mb-1">Ratings & Reviews</h4>
          <p className="text-yellow-500">
            ⭐ {freelancer.rating} ({freelancer.reviews} reviews)
          </p>
          <p className="mt-2 text-sm text-gray-600">
            “Great experience working with {freelancer.name}!”
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreelancerProfile;
