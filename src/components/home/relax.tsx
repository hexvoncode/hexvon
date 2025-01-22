"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

const Relax = () => {
  return (
    <div
      className="relative flex items-center justify-center  h-[40rem] rounded-2xl w-full bg-cover bg-center bg-no-repeat bg-black "
      style={{
        background: `url('./bg-shape.svg')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

      <TextRevealCard
        text="We’re the magic makers"
        revealText="Are you sure you're not wizards?"
      >
        <TextRevealCardTitle>Let’s Make Some Magic!</TextRevealCardTitle>
        <TextRevealCardDescription>
          At Hexvon, we believe in creating extraordinary experiences with a
          dash of creativity and a sprinkle of fun. Ready to bring your ideas to
          life? We’re here to help!
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
};

export default Relax;
