import { CollegeGrid } from "./CollegeGrid";
const Colleges = () => {
  return (
    <>
      <div className="mt-20 md:mt-40">
        <h1 className="mb-20 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl">
          Trusted by students at <br /> IITs, NITs, BITS and 20+ other colleges
        </h1>
        <CollegeGrid />
      </div>
    </>
  );
};

export default Colleges;
