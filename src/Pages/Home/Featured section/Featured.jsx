import { Link } from "react-router-dom";
import SurveyCard from "../../../components/SurveyCard";
import SectionTitle from "../../../components/shared/SectionTitle";
import useSurveys from "../../../hooks/useSurveys";

const Featured = () => {
  const [surveys] = useSurveys();

  const sortedSurveys = surveys.sort((a, b) => {
    return a.voteCount < b.voteCount ? 1 : b.voteCount < a.voteCount ? -1 : 0;
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionTitle
        subtitle={"Featured"}
        title={"Most Voted Surveys"}
      ></SectionTitle>

      {/* survey card container */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedSurveys.map((survey) => {
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

export default Featured;
