import { useEffect, useState } from "react";
import useAuth from "./useAuth";

import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState("");
  const [loader, setLoader] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.post("/checkRole", { email: user?.email }).then((res) => {
      setRole(res.data.role);
      setLoader(false);
    });
  }, [axiosPublic, user?.email]);
  return [role, loader];
};

export default useRole;
