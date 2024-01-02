"use client";

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }: any) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const option = {
    width: "300",
    height: "250",
    playerVars: {
      autoplay: 1,
    },
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 transition-all ease-in">
        <button
          className="text-color-primary float-right bg-color-secondary rounded mb-2"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <X size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="fixed bottom-2 right-2 text-color-primary float-right bg-color-secondary rounded mb-2 p-3 transition-all ease-in"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Open Trailer
      </button>
    );
  };

  return <>{isOpen ? <Player /> : <ButtonOpenPlayer />}</>;
}
