import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, loader] = useRole();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user) {
    if (loader) {
      return <span className="loading loading-dots loading-lg"></span>;
    }
    if (role === "admin") {
      return children;
    }
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
};

export default AdminRoutes;
