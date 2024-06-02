const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="w-[400px] mt-24 mx-auto text-center">
      <p className="mb-2 text-xl font-bold text-main ">{subtitle}</p>
      <hr />
      <h3 className="text-3xl font-medium uppercase mt-2 mb-10">{title}</h3>
    </div>
  );
};

export default SectionTitle;
