import { useParams } from "react-router-dom";
import SectionTitle from "../../components/shared/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SurveyResponseDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  console.log(id);
  const { data: responses = [], refetch } = useQuery({
    queryKey: ["responses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveys/responses/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(responses);
  return (
    <div>
      <SectionTitle
        title={"Survey Responses"}
        subtitle={"Surveyor"}
      ></SectionTitle>

      <div className="overflow-x-auto max-w-screen-xl mx-auto">
        <table className="table ">
          <thead className="bg-main">
            <tr>
              <th>Serial No</th>
              <th>User Email</th>
              <th>User Name</th>
              <th></th>
              <th>Vote</th>
            </tr>
          </thead>

          <tbody>
            {responses?.responses?.map((res, i) => {
              return (
                <tr key={res._id}>
                  <th>{i + 1}</th>
                  <td>{res?.votedUserEmail}</td>
                  <td>{res?.votedUserName}</td>
                  {Object.keys(res?.response).map((key) => {
                    return (
                      <>
                        <td>{key}</td>
                        <td>{res?.response[key]}</td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyResponseDetails;
