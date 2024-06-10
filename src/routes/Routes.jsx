import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Surveys from "../Pages/Surveys/Surveys";
import SurveyDetails from "../Pages/Surveys/SurveyDetails";
import ProUser from "../Pages/pro-user/ProUser";
import Payment from "../Pages/pro-user/Payment";
import DashboardLayout from "../Layout/DashboardLayout";
import Users from "../Pages/Admin/Users";
import AdminSurveys from "../Pages/Admin/AdminSurveys";
import AllPayments from "../Pages/Admin/AllPayments";
import UserReportSurvey from "../Pages/userDashboard/UserReportSurvey";
import UserSurveys from "../Pages/userDashboard/UserSurveys";
import Comments from "../Pages/userDashboard/Comments";
import CreateSurvey from "../Pages/Surveyor/CreateSurvey";
import UpdatePage from "../Pages/Surveyor/UpdatePage";
import UpdateForm from "../Pages/Surveyor/UpdateForm";
import SurveyResponses from "../Pages/Surveyor/SurveyResponses";
import SurveyResponseDetails from "../Pages/Surveyor/SurveyResponseDetails";
import AdminRoutes from "./AdminRoutes";
import SurveyorRoutes from "./SurveyorRoutes";
import Feedback from "../Pages/Surveyor/Feedback";
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

  // dashboard routes here
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // admin routes
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Users></Users>
          </AdminRoutes>
        ),
      },

      {
        path: "adminSurveys",
        element: (
          <AdminRoutes>
            <AdminSurveys></AdminSurveys>
          </AdminRoutes>
        ),
      },
      {
        path: "adminPayments",
        element: (
          <AdminRoutes>
            <AllPayments></AllPayments>
          </AdminRoutes>
        ),
      },

      // user routes
      {
        path: "reports",
        element: <UserReportSurvey></UserReportSurvey>,
      },
      {
        path: "userSurveys",
        element: <UserSurveys></UserSurveys>,
      },
      {
        path: "comments",
        element: <Comments></Comments>,
      },

      // surveyor routes
      {
        path: "/dashboard/surveyor/create",
        element: (
          <SurveyorRoutes>
            <CreateSurvey></CreateSurvey>,
          </SurveyorRoutes>
        ),
      },
      {
        path: "/dashboard/surveyor/update",
        element: (
          <SurveyorRoutes>
            <UpdatePage></UpdatePage>,
          </SurveyorRoutes>
        ),
      },
      {
        path: `/dashboard/update/:id`,
        element: (
          <SurveyorRoutes>
            <UpdateForm></UpdateForm>,
          </SurveyorRoutes>
        ),
      },
      {
        path: `/dashboard/surveyor/feedbacks`,
        element: (
          <SurveyorRoutes>
            <Feedback></Feedback>,
          </SurveyorRoutes>
        ),
      },
      {
        path: `/dashboard/surveyor/surveys`,
        element: (
          <SurveyorRoutes>
            <SurveyResponses></SurveyResponses>,
          </SurveyorRoutes>
        ),
      },
      {
        path: `/dashboard/surveyResponses/:id`,
        element: (
          <SurveyorRoutes>
            <SurveyResponseDetails></SurveyResponseDetails>,
          </SurveyorRoutes>
        ),
      },
    ],
  },
]);

export default router;
