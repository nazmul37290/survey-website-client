import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useSurveys = () => {
  const axiosPublic = useAxiosPublic();

  const { data: surveys = [], isPending } = useQuery({
    queryKey: ["surveys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      return res.data;
    },
  });

  // if (isPending) return "Loading...";
  return [surveys, isPending];
};

export default useSurveys;
