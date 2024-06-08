import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useParticipatedSurveys = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: surveys = [], refetch } = useQuery({
    queryKey: ["participatedSurveys"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/surveys/user/participated?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  return [surveys];
};

export default useParticipatedSurveys;
