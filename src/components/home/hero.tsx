"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const iconStyles = (iconName:string) =>
    `cursor-pointer transition-transform duration-300 social-icon ${
      activeIcon === iconName ? "text-primary scale-125" : "text-gray-500"
    }`;

  return (
    <section className="container mx-auto relative min-h-screen p-2 lg:p-8">
      {/* Hero content */}
      <div>
        <div className="flex gap-2 md:gap-4">
          <FaFacebook
            className={iconStyles("facebook")}
            onClick={() => handleIconClick("facebook")}
          
          />
          <FaYoutube
            className={iconStyles("youtube")}
            onClick={() => handleIconClick("youtube")}
          />
          <FaLinkedin
            className={iconStyles("linkedin")}
            onClick={() => handleIconClick("linkedin")}
          />
          <FaInstagram
            className={iconStyles("instagram")}
            onClick={() => handleIconClick("instagram")}
          />
        </div>
        <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mt-36 md:mt-24 lg:mt-36 xl:mt-40 md:leading-tight">
          BUILD <br />
          SOMETHING <br />
          <span className="text-primary">AMAZING</span> <br />
          WITH Hexvon
        </h1>
      </div>
      {/* Hero image */}
      <div className="absolute right-0 top-2 lg:right-16 xl:right-20 md:top-12">
        <Image
          src={"/hero.png"}
          alt="hero"
          width={550}
          height={600}
          className="w-52 md:w-[300px] lg:w-[400px] xl:w-[500px]"
        />
      </div>
    </section>
  );
};

export default Hero;
