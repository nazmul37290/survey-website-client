import SectionTitle from "../../components/shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useParticipatedSurveys from "../../hooks/useParticipatedSurveys";
import useRole from "../../hooks/useRole";

const Comments = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const [surveys] = useParticipatedSurveys();
  console.log(surveys);
  return (
    <div>
      <SectionTitle title={"Comments"} subtitle={"Pro-User"}></SectionTitle>
      {!role === "pro-user" ? (
        "Only pro users can access this page"
      ) : (
        <>
          <div className="overflow-x-auto max-w-screen-xl mx-auto">
            <table className="table ">
              <thead className="bg-main">
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Surveyor Email</th>
                  <th>Comment</th>
                </tr>
              </thead>

              <tbody>
                {surveys.map((survey, i) => {
                  return (
                    <tr key={survey._id}>
                      <th>{i + 1}</th>
                      <td>{survey?.title}</td>
                      <td>{survey?.category}</td>
                      <td>{survey?.surveyorEmail}</td>
                      <td>
                        {
                          survey.responses.find(
                            (res) => res.votedUserEmail === user.email
                          ).response.comment
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
