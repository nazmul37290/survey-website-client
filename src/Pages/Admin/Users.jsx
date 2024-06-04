import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return <div></div>;
};

export default Users;
