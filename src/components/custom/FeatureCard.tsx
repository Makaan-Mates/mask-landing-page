interface FeatureCardProps {
  title: string;
  number: number;
  imgSrc: string;
  ringColor: string;
}

const FeatureCard = ({
  title,
  number,
  imgSrc,
  ringColor,
}: FeatureCardProps) => {
  return (
    <>
      <div className="feature-card flex  flex-col items-center">
        <div
          className={`circle mt-16 flex  h-12 w-12 items-center justify-center rounded-full border-2 ${ringColor} bg-[#0a0a0a] text-white`}
        >
          <span className="text-xl font-bold">{number}</span>
        </div>
        <div className="mt-8 bg-[#0a0a0a] py-4">
          <h1 className="text-2xl">{title}</h1>
        </div>
        <div className="mt-20 flex w-full flex-col items-center bg-[#0a0a0a] p-1">
          <div className="w-[50%] rounded-xl bg-[#282828] p-3">
            <img
              src={imgSrc}
              alt="topics to follow"
              className="w-full rounded-lg object-cover"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
