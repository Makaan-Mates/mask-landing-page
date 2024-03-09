import { ProfileCard } from "./ProfileCard";

const profiles = [
  {
    name: "Sourabh Rathour",
    github: "https://github.com/sourabhrathourr",
    bio: "asdds",
    avatar: "https://avatars.githubusercontent.com/u/84420690?v=4",
  },
  {
    name: "Shadev Kumar",
    github: "https://github.com/Shadev-Kumar",
    bio: "adsjk",
    avatar: "https://avatars.githubusercontent.com/u/89594789?v=4",
  },
  {
    name: "Anuj Mishra",
    github: "https://github.com/Anuj236",
    bio: "i m lodu",
    avatar: "https://avatars.githubusercontent.com/u/47269252?v=4",
  },
];

const About = () => {
  return (
    <>
      <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
        Meet the Developers
      </h1>
      <div className=" mt-20 flex flex-row items-center justify-center gap-20">
        {profiles.map((profile, index) => (
          <div key={index} className="">
            <ProfileCard
              name={profile.name}
              github={profile.github}
              bio={profile.bio}
              avatar={profile.avatar}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
