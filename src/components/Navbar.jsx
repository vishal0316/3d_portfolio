import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-slate-100 items-center justify-center flex font-bold shadow-md"
      >
        <p className="black-gradient_text  ">VR</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
