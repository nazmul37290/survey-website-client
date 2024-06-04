import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Surveys from "../Pages/Surveys/Surveys";
import SurveyDetails from "../Pages/Surveys/SurveyDetails";
import ProUser from "../Pages/pro-user/ProUser";
import Payment from "../Pages/pro-user/Payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/surveys",
        element: <Surveys></Surveys>,
      },
      {
        path: "/surveys/:id",
        element: <SurveyDetails></SurveyDetails>,
      },
      {
        path: "/proUser",
        element: <ProUser></ProUser>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
