import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-900   w-full h-20  text-white flex items-center justify-between">
      <div className="p-2 font-bold  uppercase text-[20px]"> portfolio</div>
      <nav className="flex   space-x-2 p-3 mt-10 text-[15px] font-bold  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "scale-125 transition-transform duration-300 inline-block "
              : "hover:scale-125 transition-transform duration-300 inline-block"
          }
        >
          home
        </NavLink>
        <div>|</div>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive
              ? "scale-125 transition-transform duration-300 inline-block "
              : "hover:scale-125 transition-transform duration-300 inline-block"
          }
        >
          projects
        </NavLink>
        <div>|</div>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "scale-125 transition-transform duration-300 inline-block "
              : "hover:scale-125 transition-transform duration-300 inline-block"
          }
        >
          contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
