import {NavLink} from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center pt-6 shadow-md px-5">
        <Logo></Logo>
        <ul className="flex gap-12">
          <li>
            <NavLink
              to="/"
              className={({isActive, isPending}) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({isActive, isPending}) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({isActive, isPending}) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
