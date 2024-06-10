import useRole from "../hooks/useRole";
import { useNavigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const [role] = useRole();
  const navigate = useNavigate();

  if (role === "admin") {
    return children;
  } else {
    navigate("/");
  }
};

export default AdminRoutes;
