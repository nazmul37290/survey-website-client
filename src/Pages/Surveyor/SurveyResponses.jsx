import { Link } from "react-router-dom";
import SectionTitle from "../../components/shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useSurveys from "../../hooks/useSurveys";

const SurveyResponses = () => {
  const [surveys] = useSurveys();
  const { user } = useAuth();
  const mySurveys = surveys.filter(
    (survey) => survey.surveyorEmail === user?.email
  );
  console.log(mySurveys);

  return (
    <div>
      <SectionTitle title={"My Surveys"} subtitle={"Surveyor"}></SectionTitle>
      <div className="overflow-x-auto max-w-screen-xl mx-auto">
        <table className="table ">
          <thead className="bg-main">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {mySurveys.map((survey, i) => {
              return (
                <tr key={survey._id}>
                  <th>{i + 1}</th>
                  <td>{survey?.title}</td>
                  <td>{survey?.category}</td>
                  <td>{survey?.deadline}</td>
                  <td>
                    <Link to={`/dashboard/surveyResponses/${survey._id}`}>
                      <button className="btn bg-main">View Details</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyResponses;
