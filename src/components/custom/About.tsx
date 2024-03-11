import { ProfileCard } from "./ProfileCard";

const profiles = [
  {
    name: "Sourabh Rathour",
    github: "https://github.com/sourabhrathourr",
    twitter: "sourabhrathourr",
    avatar: "https://avatars.githubusercontent.com/u/84420690?v=4",
  },
  {
    name: "Shadev Kumar",
    github: "https://git.new/shadev",
    twitter: "shadevkumarr",
    avatar: "https://avatars.githubusercontent.com/u/89594789?v=4",
  },
  {
    name: "Anuj Mishra",
    github: "https://github.com/Anuj236",
    twitter: "anuj_ls",
    avatar: "https://avatars.githubusercontent.com/u/87666135?v=4",
  },
];

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent max-md:text-2xl md:text-5xl">
          Meet the developers
        </h1>
        <div className="flex flex-row items-center justify-center max-lg:flex-col max-md:gap-14 2xl:gap-4">
          {profiles.map((profile, index) => (
            <div key={index} className="">
              <ProfileCard
                name={profile.name}
                github={profile.github}
                twitter={profile.twitter}
                avatar={profile.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
