"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const currentDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
      }).format(now);

      setTime(currentTime);
      setDate(currentDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col size-full gap-5 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-right">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11 lg:pr-20">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal text-white">
            Upcoming Meeting at: 12:30 PM
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl text-white drop-shadow-lg">
              {time}
            </h1>
            <p className="text-lg font-medium text-white lg:text-2xl drop-shadow-md">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
