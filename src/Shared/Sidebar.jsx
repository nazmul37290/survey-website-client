import { FcFeedback } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCreateOutline } from "react-icons/io5";
import { MdCreate, MdReport } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import { CgComment } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const [role] = useRole();
  // const routes for surveyor
  const surveyorRoutes = (
    <>
      <li>
        <NavLink
          to={"/dashboard/surveyor/create"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <MdCreate></MdCreate> Create Survey{" "}
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/surveyor/update"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <IoCreateOutline></IoCreateOutline> Update Survey
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/surveyor/surveys"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <RiSurveyLine></RiSurveyLine> Surveys
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/surveyor/feedbacks"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <FcFeedback></FcFeedback> Feedbacks
          </span>
        </NavLink>
      </li>
    </>
  );
  // const routes for user
  const userRoutes = (
    <>
      <li>
        <NavLink
          to={"/dashboard/userSurveys"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <RiSurveyLine></RiSurveyLine> Surveys
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/comments"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <CgComment></CgComment> Comments
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/reports"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <MdReport></MdReport> My Reports
          </span>
        </NavLink>
      </li>
    </>
  );
  // const routes for admin
  const adminRoutes = (
    <>
      <li>
        <NavLink
          to={"users"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <RiSurveyLine></RiSurveyLine> Users
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"adminSurveys"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <RiSurveyLine></RiSurveyLine> Surveys
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/adminPayments"}
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-main block p-2 text-second font-semibold rounded-md"
              : isPending
              ? "pending"
              : ""
          }
        >
          <span className="flex items-center gap-4 ml-14">
            <RiSurveyLine></RiSurveyLine> Payments
          </span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content    lg:bg-base-100">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn  bg-main w-full flex justify-start border-none drawer-button lg:hidden"
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </label>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4  w-80 min-h-full text-lg  space-y-3 bg-second text-white">
          {/* Sidebar content here */}
          {role === "admin"
            ? adminRoutes
            : role === "surveyor"
            ? surveyorRoutes
            : role === "user" || role === "pro-user"
            ? userRoutes
            : "Loading...."}
          <hr />
          <li>
            <NavLink
              to={"/contactUs"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-main block p-2 text-second font-semibold rounded-md"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <span className="flex items-center gap-4 ml-14">
                <FaHome></FaHome> Contact Us
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-main block p-2 text-second font-semibold rounded-md"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <span className="flex items-center gap-4 ml-14">
                <FaHome></FaHome> Home
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
