import SectionTitle from "../../../components/shared/SectionTitle";

const HowItWorks = () => {
  return (
    <div>
      <SectionTitle
        title={"How it Works!"}
        subtitle={"Know more"}
      ></SectionTitle>
      <div className="flex flex-col justify-center">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step ">Register</li>
          <li className="step ">Login</li>
          <li className="step">Be a pro User </li>
          <li className="step">Then Enjoy many extra Features</li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
