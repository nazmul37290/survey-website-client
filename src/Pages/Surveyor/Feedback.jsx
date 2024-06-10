import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSurveys from "../../hooks/useSurveys";

const Feedback = () => {
  const axiosSecure = useAxiosSecure();
  const [surveys] = useSurveys();
  const {
    data: feedbacks = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/surveys/unpublished/feedbacks");
      return res.data;
    },
  });
  let unpublishedID = [];
  feedbacks?.map((feedback) => unpublishedID.push(feedback.surveyId));
  const feeds = unpublishedID.map((id) =>
    surveys.find((survey) => survey._id === id)
  );
  console.log(unpublishedID);
  console.log(feeds);

  return (
    <div>
      <SectionTitle
        title={"Survey Feedbacks"}
        subtitle={"Surveyor"}
      ></SectionTitle>
      <div className="overflow-x-auto max-w-screen-xl mx-auto">
        <table className="table ">
          <thead className="bg-main">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Surveyor Email</th>
              <th>Feedback</th>
            </tr>
          </thead>

          <tbody>
            {feeds.map((survey, i) => {
              return (
                <tr key={survey._id}>
                  <th>{i + 1}</th>
                  <td>{survey?.title}</td>
                  <td>{survey?.category}</td>
                  <td>{survey?.surveyorEmail}</td>
                  <td>{feedbacks[i].feedback}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedback;
