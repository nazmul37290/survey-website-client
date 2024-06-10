import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "underline  font-bold" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/surveys"}
          className={({ isActive, isPending }) =>
            isActive ? "underline  font-bold" : isPending ? "pending" : ""
          }
        >
          Surveys
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/proUser"}
          className={({ isActive, isPending }) =>
            isActive ? "underline  font-bold" : isPending ? "pending" : ""
          }
        >
          Pro-User
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isActive ? "underline  font-bold" : isPending ? "pending" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {!user && (
        <Link to={"/login"} className=" bg-white px-5">
          Sign In
        </Link>
      )}
    </>
  );
  const handleLogout = () => {
    logOut().then(() => {});
  };
  return (
    <div className="bg-main">
      <div className="navbar max-w-screen-xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-second rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost  text-second  font-bold text-2xl">
            SurveyStream
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" px-4  menu-horizontal space-x-4 text-lg text-second">
            {links}
          </ul>
        </div>
        {user && (
          <div className="dropdown ml-auto md:ml-0  dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
