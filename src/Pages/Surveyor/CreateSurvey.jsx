import { useForm } from "react-hook-form";
import SectionTitle from "../../components/shared/SectionTitle";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateSurvey = () => {
  const [deadline, setDeadline] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [questions, setQuestions] = useState([]);
  const handleQuestion = () => {
    let title = document.getElementById("questionTitle")?.value;
    let description = document.getElementById("questionDescription")?.value;
    const question = { title, description, options: ["Yes", "No"] };

    setQuestions([...questions, question]);
  };

  const onSubmit = (data) => {
    console.log(data);
    const survey = { ...data, deadline, questions: [...questions] };
    console.log(survey);
    axiosSecure.post("/surveys", survey).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <SectionTitle
        title={"Create Survey"}
        subtitle={"Surveyor"}
      ></SectionTitle>
      <div className="max-w-screen-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-bold">Title:</label>
          <br />
          <input
            className="p-2 border w-2/3  border-main rounded-lg"
            {...register("title")}
          />
          <br />
          <label className="font-bold">Description:</label>
          <br />
          <input
            className="p-2 border w-2/3  border-main rounded-lg"
            {...register("description")}
          />
          <br />

          <label className="font-bold">Email:</label>
          <br />
          <input
            readOnly
            {...register("surveyorEmail")}
            value={user?.email}
            type="email"
            className="p-2 border w-2/3 text-black border-main rounded-lg"
          />
          <br />
          <div className="flex items-center gap-5 mt-4">
            <label className="font-bold">Category</label>
            <br />
            <select
              {...register("category")}
              name="filterCategory"
              className="p-2 border  border-main rounded-lg"
              id=""
            >
              <option value="Customer Satisfaction">
                Customer Satisfaction
              </option>
              <option value="Market Research">Market Research</option>
              <option value="Employee Feedback">Employee Feedback</option>
              <option value="Product Feedback">Product Feedback</option>
              <option value="Event Feedback">Event Feedback</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Brand Awareness">Brand Awareness</option>
              <option value="community and socials">
                community and socials
              </option>
              <option value="Work Environment">Work Environment</option>
              <option value="Website and user Experience">
                Website and user Experience
              </option>
              <option value="Customer Service">
                Website and user Experience
              </option>
              <option value="Environment">Environment</option>
            </select>
            <br />
            <label className="font-bold">Deadline:</label>
            <br />
            <DatePicker
              className="p-2 border border-main"
              selected={deadline}
              onChange={(date) => setDeadline(date.toLocaleDateString("ja-JP"))}
            />
            <br />
          </div>
          <hr />
          <div>
            <h2 className="font-bold my-3">Create questions</h2>
            {questions.map((question, i) => {
              return (
                <div key={i} className=" flex gap-5">
                  <p>{i + 1}</p>
                  <p className="font-medium">Title: {question.title}</p>
                  <p className="font-medium">
                    Description: {question.description}
                  </p>
                </div>
              );
            })}
            <div className="flex items-center gap-4">
              <label className="font-bold" htmlFor="">
                Question title
              </label>
              <br />
              <input
                id="questionTitle"
                className="p-2 border  border-main rounded-lg"
                name="questionTitle"
                type="text"
              />
              <br />
              <label className="font-bold" htmlFor="">
                question Description
              </label>
              <br />
              <input
                id="questionDescription"
                className="p-2 border  border-main rounded-lg"
                name="questionDescription"
                type="text"
              />
              <input
                className="btn btn-sm"
                onClick={handleQuestion}
                value="add question"
              />
            </div>
          </div>
          <input className="btn mt-10 bg-main text-second" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateSurvey;
