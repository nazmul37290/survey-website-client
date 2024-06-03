import { Link } from "react-router-dom";
import SurveyCard from "../../components/SurveyCard";

import useSurveys from "../../hooks/useSurveys";
import { useEffect, useState } from "react";

const Surveys = () => {
  const [surveys] = useSurveys();
  // filter by categories
  const [showData, setShowData] = useState(surveys);
  console.log(showData);
  const handleCategory = (e) => {
    const category = e.target.value;
    if (category === "all") {
      setShowData(surveys);
    } else {
      const loadData = surveys.filter((survey) => survey.category === category);
      console.log(e.target.value);
      setShowData(loadData);
    }
  };
  // sort by voted count

  const handleSort = (e) => {
    const order = e.target.value;
    if (order === "Dsc") {
      const descending = showData.sort((a, b) => {
        return a.voteCount < b.voteCount
          ? 1
          : b.voteCount < a.voteCount
          ? -1
          : 0;
      });
      setShowData(descending);
    } else {
      const ascending = showData.sort((a, b) => {
        return a.voteCount < b.voteCount
          ? -1
          : b.voteCount < a.voteCount
          ? 1
          : 0;
      });
      setShowData(ascending);
    }
  };
  useEffect(() => {
    setShowData(surveys);
  }, [surveys]);
  return (
    <div>
      <h2 className="text-second my-10 font-bold text-2xl text-center">
        All Surveys here
      </h2>
      <div className="flex justify-center">
        <div className="flex items-center  mx-auto my-4 gap-2">
          <p className="font-medium">Filter By</p>
          <select
            onChange={handleCategory}
            name="filterCategory"
            className="p-2 border  border-main rounded-lg"
            id=""
          >
            <option value="all">All Surveys</option>
            <option value="Customer Satisfaction">Customer Satisfaction</option>
            <option value="Market Research">Market Research</option>
            <option value="Employee Feedback">Employee Feedback</option>
            <option value="Product Feedback">Product Feedback</option>
            <option value="Event Feedback">Event Feedback</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Brand Awareness">Brand Awareness</option>
            <option value="community and socials">community and socials</option>
            <option value="Work Environment">Work Environment</option>
            <option value="Website and user Experience">
              Website and user Experience
            </option>
            <option value="Customer Service">
              Website and user Experience
            </option>
            <option value="Environment">Environment</option>
          </select>
        </div>
        <div className="flex items-center  mx-auto my-4 gap-2">
          <p className="font-medium">sort by vote count: </p>
          <div>
            <select
              onChange={handleSort}
              className="p-2 border  border-main rounded-lg"
              name="sortByVoteCount"
              id=""
            >
              <option value="Asc">Ascending</option>
              <option value="Dsc">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showData &&
          showData?.map((survey) => {
            return (
              <Link to={`/surveys/${survey._id}`} key={survey._id}>
                <SurveyCard item={survey}></SurveyCard>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Surveys;
