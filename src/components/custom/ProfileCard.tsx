"use client";
import { PinContainer } from "../ui/3d-pin";
import { FaXTwitter } from "react-icons/fa6";

interface ProfileCardProps {
  name: string;
  github: string;
  twitter: string;
  avatar: string;
}

export function ProfileCard({
  name,
  github,
  twitter,
  avatar,
}: ProfileCardProps) {
  return (
    <div className="py-8 md:py-10  flex  items-center justify-center ">
      <PinContainer title="Github" href={github}>
        <div className="flex  w-[18rem] md:w-[16rem]  xl:w-[15rem] 2xl:w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
          <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-white">
            {name}
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-[#d1d1d1] flex items-center gap-1">
              <FaXTwitter />
              {twitter}
            </span>
          </div>
          <div className="mt-4 flex w-full rounded-lg ">
            <img className="w-full rounded-lg" src={avatar} alt={name} />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
