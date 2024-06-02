import { Link } from "react-router-dom";
import SurveyCard from "../../components/SurveyCard";
import SectionTitle from "../../components/shared/SectionTitle";
import useSurveys from "../../hooks/useSurveys";

const Surveys = () => {
  const [surveys] = useSurveys();
  return (
    <div>
      <h2 className="text-second my-10 font-bold text-2xl text-center">
        All Surveys here
      </h2>
      <div className="grid max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surveys.map((survey) => {
          return (
            <Link key={survey._id}>
              <SurveyCard item={survey}></SurveyCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Surveys;
