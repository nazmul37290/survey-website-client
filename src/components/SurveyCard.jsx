import React from "react";

const SurveyCard = ({ item }) => {
  return (
    <div className="card w-auto lg:w-96 mx-auto h-full rounded-3xl bg-white border-t-4 border-main shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-main font-bold text-xl">{item.title}</h2>
        <p className="text-base text-second">{item.description}</p>
        <p>
          <span className="font-bold">Voted Count: </span> {item.voteCount}
        </p>
        <p>
          {" "}
          <span className="font-bold">Created at: </span>
          {item.timestamp}
        </p>
      </div>
    </div>
  );
};

export default SurveyCard;
