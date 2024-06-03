import { Link } from "react-router-dom";
import SectionTitle from "../../../components/shared/SectionTitle";
import useSurveys from "../../../hooks/useSurveys";
import SurveyCard from "../../../components/SurveyCard";

const Latest = () => {
  const [surveys] = useSurveys();

  const sortedSurveys = surveys.sort((a, b) => {
    return a.timestamp < b.timestamp ? 1 : b.timestamp < a.timestamp ? -1 : 0;
  });
  return (
    <div>
      <SectionTitle subtitle={"Latest"} title={"Latest surveys"}></SectionTitle>
      {/* survey card container */}
      <div className="bg-main">
        <div className="grid max-w-screen-xl mx-auto py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedSurveys.map((survey) => {
            return (
              <Link to={`/surveys/${survey._id}`} key={survey._id}>
                <SurveyCard item={survey}></SurveyCard>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Latest;
