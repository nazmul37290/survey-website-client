import { Navigate, useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const SurveyorRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, loader] = useRole();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    if (loader) {
      return <span className="loading loading-dots loading-lg"></span>;
    }
    if (role === "surveyor") {
      return children;
    }
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
};

export default SurveyorRoutes;
