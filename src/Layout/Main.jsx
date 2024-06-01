import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
