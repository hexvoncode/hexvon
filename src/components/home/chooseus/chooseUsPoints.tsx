import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from "next/image";
import React from "react";

const ChooseUsPoints = () => {
  const points = [
    {
      title: "Cutting-Edge Technology",
      description:
        "We harness the latest advancements in technology to ensure you stay ahead in today’s fast-paced world.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM12 8V3m0 5h0m7 7c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM12 16v5m0 0H7m5 0h5"
          />
        </svg>
      ),
    },
    {
      title: "Expert Team",
      description:
        "Our dedicated professionals bring a wealth of experience to deliver innovative solutions tailored to your needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7l5 5-5 5M21 7l-5 5 5 5"
          />
        </svg>
      ),
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our priority. We focus on understanding your challenges and exceeding your expectations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 21l-4-4m0 0l-4 4m4-4V3"
          />
        </svg>
      ),
    },
    {
      title: "Tailored Solutions",
      description:
        "We provide customized solutions that are carefully crafted to meet your unique needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v18h14V3H5zm7 0h7v18h-7V3z"
          />
        </svg>
      ),
    },
  ];

  const cards = [
    { id: 1, thumbnail: "/user-centeric.jpg", className: "md:col-span-2" },
    { id: 2, thumbnail: "/cutting-edge.jpg", className: "col-span-1" },
    { id: 3, thumbnail: "/solution.jpg", className: "col-span-1" },
    { id: 4, thumbnail: "/strong-team.jpg", className: "md:col-span-2" },
  ];

  return (
    <div className=" p-10  md:p-20 xl:p-28  text-white  xl:min-h-screen">
      <div className="ml-10">
        <h1 className="hidden xl:block md:text-4xl font-bold mb-4 capitalize">Why Choose Us</h1>
        <p className="text-xl text-gray-300 ">
          Discover the reasons that set us apart from the rest.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
        <div className="w-full xl:w-1/2">
          <LayoutGrid cards={cards} />
        </div>
        <div className="grid gap-8 md:grid-cols-2 w-full xl:w-1/2 mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl border-2 border-gray-700 p-6"
            >
              <div className="mb-4">
                <HoverBorderGradient
                  duration={1}
                  clockwise={true}
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-gray-950 bg-white text-black dark:text-white flex items-center space-x-2 shadow-xl"
                >
                  <div className="mb-4">{point.icon}</div>
                </HoverBorderGradient>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-white">
                {point.title}
              </h2>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUsPoints;
