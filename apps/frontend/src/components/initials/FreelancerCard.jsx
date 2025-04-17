import { AiFillStar, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const FreelancerCard = ({
  name,
  isPro,
  rating,
  reviews,
  tagline,
  location,
  tags = [],
  price,
  currency = "₹",
  imgUrl,
  onProfileClick,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-xl p-4 shadow-sm gap-4 w-full hover:shadow-md transition">
      {/* Left */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-grow">
        <img
          src={imgUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-lg">{name}</span>
            {isPro && (
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">
                Vetted Pro
              </span>
            )}
            <div className="flex items-center gap-1 text-yellow-500 text-sm ml-1">
              <AiFillStar />
              <span className="text-black font-medium">{rating}</span>
              <span className="text-gray-500">({reviews})</span>
            </div>
          </div>

          <p className="text-sm text-gray-700">{tagline}</p>

          <div className="flex items-center text-sm text-gray-500 mt-1">
            <FaMapMarkerAlt className="mr-1" />
            {location}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:items-end items-start gap-2 w-full sm:w-auto">
        <div className="flex gap-2 text-xl text-gray-600">
          <button>
            <AiOutlineHeart />
          </button>
          <button>
            <AiOutlineSend />
          </button>
        </div>

        <button
          onClick={onProfileClick}
          className="border px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100"
        >
          See profile
        </button>

        <div className="text-sm text-gray-800">
          <span className="font-semibold">
            From {currency}
            {price.toLocaleString()}
          </span>
          <p className="text-xs text-gray-500">Satisfaction guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
