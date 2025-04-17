import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "Web & App Design", path: "/category/web-app-design" },
  { name: "UI/UX Design", path: "/category/ui-ux-design" },
  { name: "Logo & Branding", path: "/category/logo-branding" },
  { name: "Frontend Development", path: "/category/frontend-development" },
  { name: "Digital Marketing", path: "/category/digital-marketing" },
  { name: "Content Writing", path: "/category/content-writing" },
];

const CategoriesHeader = () => {
  return (
    <div className="w-full mb-20 px-4 hide-navbar sm:px-10 lg:px-20 relative top-16 z-10 border-y overflow-x-auto">
      <div className="flex sm:justify-between gap-6 sm:gap-10 min-w-max sm:min-w-full">
        {categories.map((category, index) => (
          <NavLink
            to={category.path}
            key={index}
            className={({ isActive }) =>
              `text-sm sm:text-base whitespace-nowrap py-3 border-b-4 ${
                isActive
                  ? "border-green-500 text-green-600 font-semibold"
                  : "border-transparent text-gray-600"
              } hover:cursor-pointer hover:border-green-400 transition`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesHeader;
