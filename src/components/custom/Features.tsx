import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Select topics to follow ",
    imgSrc:
      "https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709834371/mask/features/topics_mask.jpg",
    number: 1,
    ringColor: "border-green-400",
  },

  {
    title: "Curated feed for trending posts",
    imgSrc:
      "https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709837230/mask/features/filter_mask.jpg",
    number: 2,
    ringColor: "border-[#FFD700]",
  },

  {
    title: "Publish posts with rich text editor",
    imgSrc:
      "https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709834552/mask/features/addpost_mask.jpg",
    number: 3,
    ringColor: "border-blue-400",
  },

  {
    title: "Upvote and bookmark posts",
    imgSrc:
      "https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709834582/mask/features/postdetail_mask.jpg",
    number: 4,
    ringColor: "border-orange-400",
  },

  {
    title: "Nested comments for discussions",
    imgSrc:
      "https://res.cloudinary.com/dl0d1pfrs/image/upload/v1709834610/mask/features/nestedcomment_mask.jpg",
    number: 5,
    ringColor: "border-purple-400",
  },
];

const Features = () => {
  return (
    <div className=" flex flex-col items-center">
      <h1
        
        className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold max-md:text-2xl text-transparent md:text-5xl"
      >
        What's inside the store?
      </h1>
      <div  className="relative flex  flex-col items-center overflow-hidden">
        <div className="absolute top-16 -z-20 h-full  border-r border-dashed border-[#d1d1d1]"></div>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            imgSrc={feature.imgSrc}
            number={feature.number}
            ringColor={feature.ringColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
