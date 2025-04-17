import React, { useEffect, useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineAppstore,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdClose } from "react-icons/md";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto"; // cleanup
    };
    }, [isOpen]);


  const links = [
    { name: "Dashboard", icon: <AiOutlineDashboard />, path: "/dashboard" },
    { name: "My Gigs", icon: <AiOutlineAppstore />, path: "/my-gigs" },
    { name: "Orders", icon: <AiOutlineFileText />, path: "/orders" },
    { name: "Messages", icon: <AiOutlineMessage />, path: "/messages" },
    { name: "Settings", icon: <AiOutlineSetting />, path: "/settings" },
  ];

  return (
    <>
      {/* Toggle for small screens */}
      <div className="sm:hidden absolute right-0 z-30 p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700"
        >
            {
                isOpen?<MdClose/> :<AiOutlineMenu/>
            }
        </button>
      </div>

      <aside
        className={`${
          isOpen ? "block w-full sm:w-64 h-screen" : "hidden"
        } sm:block bg-white shadow-md p-4 sm:h-screen fixed sm:relative z-10`}
      >
        <nav className="space-y-4 mt-6 sm:mt-0">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="flex items-center gap-3 p-2 rounded hover:bg-green-100 text-gray-700"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
