import bannerBg from "../../assets/Images/banner-bg.jpg";
const Banner = () => {
  return (
    <div
      className="hero h-[650px]"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <span className="text-main">SurveyStream</span>
          </h1>
          <p className="mb-5">
            Effortlessly create, share, and analyze surveys with SurveyStream.
            Harness valuable insights and make data-driven decisions with ease.
            Dive into the stream of feedback today!
          </p>
          <button className="btn bg-main border-none text-second font-bold px-10 text-base">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
