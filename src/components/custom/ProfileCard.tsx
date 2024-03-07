"use client";
import { PinContainer } from "../ui/3d-pin";

interface ProfileCardProps {
  name: string;
  github: string;
  bio: string;
  avatar: string;
}

export function ProfileCard({ name, github, bio, avatar }: ProfileCardProps) {
  return (
    <div className=" m-10  flex w-96 items-center justify-center">
      <PinContainer title="Github" href={github}>
        <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
          <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">
            {name}
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-slate-500 ">{bio}</span>
          </div>
          <div className="mt-4 flex w-full rounded-lg ">
            <img className="w-full rounded-lg" src={avatar} alt="avatar" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
