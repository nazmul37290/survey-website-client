import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SurveyDetails = () => {
  // const [survey,setSurvey]=useState();
  const { id } = useParams();
  console.log(id);
  const axiosPublic = useAxiosPublic();
  const { data: survey } = useQuery({
    queryKey: ["surveyDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <h1>{survey?.title}</h1>
    </div>
  );
};

export default SurveyDetails;
