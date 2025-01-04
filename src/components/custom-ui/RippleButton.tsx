"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const RippleButton = ({ title }: { title: string }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const x = e.pageX - btn.offsetLeft; // Mouse X relative to button
    const y = e.pageY - btn.offsetTop; // Mouse Y relative to button

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };

  return (
    <>
      <button
        onMouseMove={handleMouseMove}
        className="btn relative border border-white/20 text-sm xl:text-lg font-semibold text-white rounded-full size-40 lg:size-44 xl:size-52 flex justify-center items-center mt-5 ml-24 p-6 overflow-hidden group hover:text-black"
        aria-label={title}
        style={{
          position: "relative",
          zIndex: 10, // Ensures the button stays on top
        }}
      >
        {title}
        <IoIosArrowRoundForward className="-rotate-45 text-4xl text-primary ml-2 group-hover:animate-pulse" />
      </button>
    </>
  );
};

export default RippleButton;
