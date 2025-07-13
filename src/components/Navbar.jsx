import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skill", label: "Skills" },
    { path: "/contact", label: "Contact" },
    { path: "/color", label: "Color" },
  ];
  const navigate = useNavigate();
  return (
    <nav className="bg-[#2c7ce6] text-white shadow-md">
      <div className="flex items-center justify-between ml-3 mr-10 py-4 px-4 max-w-full">
        <span
          onClick={() => navigate("/")}
          className="text-5xl font-bold pl-[10px] text-white cursor-pointer"
        >
          Sunil<span className="text-white font-extrabold">.</span>
        </span>

        <div className="flex gap-6 items-center text-xl font-semibold pr-4">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 py-1 transition-all duration-200 border-b-2 ${
                  isActive ? "border-white" : "border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
