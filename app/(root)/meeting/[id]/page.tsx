"use client";

import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsStupComplete] = useState(false);

  return (
    <div className="h-screen w-full">
      <StreamCall>
        <StreamTheme></StreamTheme>
      </StreamCall>
    </div>
  );
};

export default Meeting;
