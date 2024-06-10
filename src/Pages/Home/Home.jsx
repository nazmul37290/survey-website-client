import Banner from "./Banner";
import Faq from "./Faq section/Faq";
import Featured from "./Featured section/Featured";
import HowItWorks from "./HowItWorks/HowItWorks";
import Latest from "./Latest section/Latest";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Latest></Latest>
      <Faq></Faq>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
