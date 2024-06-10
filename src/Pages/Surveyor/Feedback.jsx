import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Feedback = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: feedbacks = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/surveys/");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        title={"Survey Feedbacks"}
        subtitle={"Surveyor"}
      ></SectionTitle>
    </div>
  );
};

export default Feedback;
