import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState("");
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.post("/checkRole", { email: user?.email }).then((res) => {
      setRole(res.data.role);
    });
  }, [axiosSecure, user?.email]);
  return [role];
};

export default useRole;
