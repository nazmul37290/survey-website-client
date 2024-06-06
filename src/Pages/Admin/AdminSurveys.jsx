import { useRef, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import useSurveys from "../../hooks/useSurveys";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminSurveys = () => {
  const axiosSecure = useAxiosSecure();
  const [surveys, , refetch] = useSurveys();
  const [newStatus, setNewStatus] = useState("");
  console.log(surveys);
  const handleStatus = async (survey) => {
    if (survey?.status === "Publish") {
      console.log("unPublish");
      setNewStatus("Unpublish");
      document.getElementById(survey._id).showModal();
    } else {
      console.log("publish");
      setNewStatus("Publish");
      const updatedStatus = { newStatus: "Publish" };
      const res = await axiosSecure.patch(
        `/surveys/${survey?._id}`,
        updatedStatus
      );
      console.log(res.data);
      refetch();
    }
  };
  const handleChangeStatus = async (id) => {
    const feedback = document.getElementById(`feedback${id}`).value;
    console.log(feedback);
    const updatedStatus = { newStatus, feedback };
    const res = await axiosSecure.patch(`/surveys/${id}`, updatedStatus);
    console.log(res.data);
    document.getElementById("dialogClose").click();
    refetch();
  };
  return (
    <div>
      <SectionTitle subtitle={"Admin"} title={"Surveys"}></SectionTitle>

      <div className="max-w-screen-xl mx-auto">
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead>
              <tr className="bg-main">
                <th></th>
                <th></th>
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Surveyor email</th>
                <th>Status</th>

                <th></th>
                <th>Vote Count</th>
              </tr>
            </thead>
            <tbody>
              {surveys.map((survey, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <dialog id={survey._id} className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg ">Feedback!</h3>
                          <textarea
                            id={`feedback${survey._id}`}
                            className="p-4 w-full border "
                            placeholder="enter your feedback"
                          ></textarea>
                          <div className="modal-action">
                            <button
                              onClick={() => handleChangeStatus(survey?._id)}
                              className="btn bg-main"
                            >
                              Unpublish
                            </button>
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button id="dialogClose" className="btn">
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                    <th>{i + 1}</th>
                    <td>{survey?.title}</td>
                    <td>{survey?.category}</td>
                    <td>{survey?.deadline}</td>
                    <td>{survey?.surveyorEmail}</td>
                    <td>{survey?.status}</td>
                    <td>
                      <button
                        onClick={() => handleStatus(survey)}
                        className="btn btn-sm"
                      >
                        Change Status
                      </button>
                    </td>
                    <td>{survey?.voteCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSurveys;
