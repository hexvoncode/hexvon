"use client";
import React from "react";
import CountUp from "react-countup";

const OurImpression = () => {
  return (
    <div
      className="p-10 px-5 md:p-20 text-white relative"
      style={{
        background: `url('/bg-shape.svg') no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col xl:flex-row justify-between items-center gap-10 container mx-auto xl:min-h-screen ">
        <div className="w-full xl:w-1/2">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold mb-4 capitalize">
            Our Work Impressions
          </h1>
          <p className="text-md md:text-lg text-white/70 mb-8">
            We take immense pride in delivering innovative solutions and
            crafting exceptional digital experiences. Our passion for excellence
            is reflected in every project we undertake, leaving a lasting
            impression on our clients and their audiences.
          </p>
          <p className="text-md md:text-lg text-white/70">
            Whether it’s creating user-friendly applications, designing modern
            interfaces, or implementing robust back-end systems, our team is
            committed to exceeding expectations and driving meaningful results.
          </p>
          <div className="mt-6">
            <div className="flex items-end">
              <h3 className="text-xl sm:text-2xl font-bold">Visit Our Social Media's </h3>
              <div className="border-b-2 border-primary w-36"/>
            </div>
            <div className="flex gap-6 mt-6 ">
              <button className="rounded-full py-2 px-4 border-2 border-white-100 hover:border-primary transition-all">
                Printerest
              </button>
              <button className="rounded-full py-2 px-4 border-2 border-white-100 hover:border-primary transition-all">
                Threads
              </button>
              <button className="rounded-full py-2 px-4 border-2 border-white-100 hover:border-primary transition-all">
                Instragram
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mx-auto sm:ml-auto xl:mx-0 mt-12 ">
          <div className="flex flex-col items-center justify-center rounded-full  size-[180px] sm:size-[200px] lg:size-[250px]  border border-gray-500 sm:mt-32 xl:mt-0">
            <div className="flex items-center gap-1 text-primary text-4xl lg:text-5xl font-bold">
              <CountUp start={0} end={1.5} duration={2.75} delay={0.5} />
              <span>+</span>
            </div>
            <h4 className="text-xl lg:text-2xl text-center mt-4">
              years of industry experience{" "}
            </h4>
          </div>
          <div className="xl:space-y-28 flex gap-6 xl:flex-col">
            <div className="flex flex-col items-center justify-center rounded-full size-[180px] sm:size-[200px] lg:size-[250px] border border-gray-500 ">
              <div className="flex items-center gap-1 text-primary text-4xl lg:text-5xl font-bold">
                <CountUp start={0} end={27} duration={2.75} delay={0.5} />
                <span>+</span>
              </div>
              <h4 className="text-xl lg:text-2xl text-center mt-4">Projects Done</h4>
            </div>
            <div className="flex flex-col items-center justify-center rounded-full size-[180px] sm:size-[200px] lg:size-[250px] border border-gray-500 sm:mt-32 xl:mt-0 sm:ml-4 xl:ml-0 ">
              <div className="flex items-center gap-1 text-primary text-4xl lg:text-5xl font-bold">
                <CountUp start={0} end={20} duration={2.75} delay={0.5} />
                <span>+</span>
              </div>
              <h4 className="text-xl lg:text-2xl text-center mt-4">Happy Client</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpression;
