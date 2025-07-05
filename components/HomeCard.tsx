import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  imgPath: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

const HomeCard = ({
  imgPath,
  title,
  description,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        `relative overflow-hidden group cursor-pointer rounded-[14px] px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px]`,
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={imgPath} alt="meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-light-1">{title}</h1>
        <p className="text-lg font-normal text-light-2">{description}</p>
      </div>

      {/* SHINE EFFECT */}
      {/* <span className="absolute inset-0 overflow-hidden pointer-events-none">
        <span
          className="
      absolute top-0 left-[-300%] w-[300%] h-[6px]
      bg-gradient-to-r from-transparent via-white/80 to-transparent
      opacity-70 blur-sm rotate-[20deg] transform
      group-hover:translate-x-[300%] group-hover:translate-y-[300%]
      transition-all duration-500 ease-in-out
    "
        ></span>
      </span> */}
    </div>
  );
};

export default HomeCard;
