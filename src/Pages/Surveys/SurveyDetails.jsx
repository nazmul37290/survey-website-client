import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useRole from "../../hooks/useRole";

const SurveyDetails = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { id } = useParams();
  console.log(id);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: survey } = useQuery({
    queryKey: ["surveyDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${id}`);

      return res.data;
    },
  });

  const onSubmit = (data) => {
    const response = {
      ...survey,
      responses: [
        {
          votedUserName: user.displayName,
          votedUserEmail: user.email,
          response: data,
        },
      ],
    };
    console.log(response);

    axiosSecure.put("/surveys/response", response).then((res) => {
      console.log(res.data);
    });
  };
  const handleReport = async () => {
    const res = await axiosSecure.post("/surveys/report", {
      survey,
      reportedBy: user.email,
    });
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Survey reported successfully",
      });
    }
  };
  return (
    <div className="max-w-3xl mx-auto shadow-lg border p-10 mt-10 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="font-semibold text-red-500 text-xl">
          {!user ? "You have to login for vote in survey" : ""}
        </p>
        <h1 className="text-black  font-bold text-xl">{survey?.title}</h1>
        <p className="mt-2">{survey?.description}</p>
        <p className="mt-5">
          <span className="font-medium">Creation Time: </span>
          {survey?.timestamp}
        </p>
        <div className="flex items-center gap-10">
          <p className="">
            <span className="font-medium">Category: </span>
            {survey?.category}
          </p>
          <p className="">
            <span className="font-medium">Deadline: </span>
            {survey?.deadline}
          </p>
        </div>

        {survey?.questions?.map((question, questionNumber) => {
          return (
            <div
              key={questionNumber}
              className="shadow-sm p-5 space-y-3 rounded-lg my-3 border border-main"
            >
              <h1 className="font-bold text-lg">{question.title}</h1>
              <p>{question.description}</p>
              <div>
                {question.options.map((option, i) => {
                  return (
                    <div key={i}>
                      <input
                        key={i}
                        required
                        {...register(`Question-${questionNumber + 1}`, {
                          required: true,
                        })}
                        type="radio"
                        value={`${option}`}
                        id=""
                      />

                      <label className="font-medium ml-2">{option}</label>
                      <br />
                    </div>
                  );
                })}
              </div>
              {/* {errors.Question + `${questionNumber + 1}` && (
                <span className="text-red-600">
                  {" "}
                  Question {questionNumber + 1} is required
                </span>
              )} */}
            </div>
          );
        })}
        {role === "pro-user" && (
          <>
            <label className="font-medium ml-2">Add Comment</label>
            <br />
            <textarea
              name="comment"
              {...register("comment")}
              className="border w-full rounded-lg p-2 mt-2 "
              placeholder="add your comment"
              id=""
            ></textarea>
          </>
        )}

        <p className="text-[#f45151]">{}</p>
        <div className=" flex gap-4">
          <input
            className="btn  mt-4 text-white bg-main "
            disabled={!user}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <button onClick={handleReport} className="btn mt-4 bg-red-600 text-white">
        Report
      </button>
    </div>
  );
};

export default SurveyDetails;
