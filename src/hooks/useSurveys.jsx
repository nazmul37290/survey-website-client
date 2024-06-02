import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useSurveys = () => {
  const axiosPublic = useAxiosPublic();

  const { data: surveys = [] } = useQuery({
    queryKey: ["surveys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      return res.data;
    },
  });
  return [surveys];
};

export default useSurveys;
