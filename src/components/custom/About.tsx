import { ProfileCard } from "./ProfileCard";

const profiles = [
  {
    name: "Sourabh Rathour",
    github: "https://github.com/sourabhrathour45",
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
      <div className="flex flex-row items-center justify-center gap-4">
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
