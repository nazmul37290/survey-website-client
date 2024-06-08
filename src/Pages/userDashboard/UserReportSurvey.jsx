import React from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const UserReportSurvey = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reports = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/surveys/user/reports?email=${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle title={"Reported Surveys"} subtitle={"user"}></SectionTitle>
      <div className="overflow-x-auto max-w-screen-xl mx-auto">
        <table className="table ">
          <thead className="bg-main">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Date of Pay</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((survey, i) => {
              return (
                <tr key={survey._id}>
                  <th>{i + 1}</th>
                  <td>{survey?.survey?.surveyorEmail}</td>
                  <td>{survey?.survey?.title}</td>
                  <td>{survey?.survey?.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReportSurvey;
