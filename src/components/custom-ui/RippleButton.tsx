"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const RippleButton = ({ title }: { title: string }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to button
    const y = e.clientY - rect.top; // Mouse Y relative to button

    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="relative">
      <button
        onMouseMove={handleMouseMove}
        className="btn relative border border-white/20 text-lg font-semibold text-white rounded-full size-48 sm:size-52 flex justify-center items-center mt-5 p-6 overflow-hidden group hover:text-black"
        aria-label={title}
        style={{
          position: "relative",
          zIndex: 10, // Ensures the button stays on top
        }}
      >
        {title}
        <IoIosArrowRoundForward className="-rotate-45 text-4xl text-primary ml-2 group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default RippleButton;
