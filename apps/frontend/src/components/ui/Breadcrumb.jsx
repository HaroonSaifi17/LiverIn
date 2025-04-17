import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ul className="flex items-center space-x-1">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            <AiFillHome className="text-xl" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <li key={index} className="flex items-center space-x-1">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-500">{label}</span>
              ) : (
                <Link to={routeTo} className="hover:underline text-blue-600">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
