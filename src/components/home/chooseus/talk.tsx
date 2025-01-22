import RippleButton from "@/components/custom-ui/RippleButton";
import React from "react";

const Talk = () => {
  return (
    <div className="text-center py-12 lg:py-20 xl:container xl:pt-72 xl:ml-20  font-inter">
      <h5 className="text-xl lg:text-2xl xl:text-4xl text-white/20">
        Have you project in mind?
      </h5>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-8xl font-semibold mb-4 capitalize my-6">
        Let’s make something <br /> great together!
      </h1>
      <div className="w-full mx-auto mt-12 flex justify-center ripple-button-container">
        <RippleButton title="Contact Us" />
      </div>
    </div>
  );
};

export default Talk;
