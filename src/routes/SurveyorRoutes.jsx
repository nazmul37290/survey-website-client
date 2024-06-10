import { useNavigate } from "react-router-dom";
import useRole from "../hooks/useRole";

const SurveyorRoutes = ({ children }) => {
  const [role] = useRole();
  const navigate = useNavigate();

  if (role === "surveyor") {
    return children;
  } else {
    navigate("/");
  }
};

export default SurveyorRoutes;
