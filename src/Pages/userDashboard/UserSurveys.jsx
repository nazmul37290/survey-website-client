import SectionTitle from "../../components/shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserSurveys = () => {
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
  return (
    <div>
      <SectionTitle
        title={"Participated Surveys"}
        subtitle={"user"}
      ></SectionTitle>
      <div className="overflow-x-auto max-w-screen-xl mx-auto">
        <table className="table ">
          <thead className="bg-main">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Surveyor Email</th>
            </tr>
          </thead>

          <tbody>
            {surveys.map((survey, i) => {
              return (
                <tr key={survey._id}>
                  <th>{i + 1}</th>
                  <td>{survey?.title}</td>
                  <td>{survey?.category}</td>
                  <td>{survey?.deadline}</td>
                  <td>{survey?.surveyorEmail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSurveys;
