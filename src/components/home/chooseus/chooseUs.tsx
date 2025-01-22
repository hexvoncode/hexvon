"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ChooseUsPoints from "./chooseUsPoints";
import OurImpression from "./ourImpression";
import Talk from "./talk";

gsap.registerPlugin(ScrollTrigger);

const ChooseUS: React.FC = () => {
  useEffect(() => {
    
    const scrollContainer = document.querySelector(
      ".horizontal-scroll-container"
    ) as HTMLElement;
    const totalSections = scrollContainer.children.length;

  
    const thirdSection = scrollContainer.children[2] as HTMLElement;
    const fourthSection = scrollContainer.children[3] as HTMLElement;

    const thirdSectionWidth = thirdSection ? thirdSection.offsetWidth : 0;
    const fourthSectionWidth = fourthSection ? fourthSection.offsetWidth : 0;

    // Adjust scroll height to include the width of the third and fourth sections
    const scrollHeight = scrollContainer.scrollWidth - window.innerWidth - thirdSectionWidth - fourthSectionWidth;

    if (window.innerWidth >= 1024) {
   
      document.body.style.height = "100vh"; 
      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - scrollHeight),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: () => `+=${scrollHeight}`,
          scrub: 1,
          pin: true,
          markers: false,
          onEnter: () => {
            document.body.classList.add("horizontal-scrolling");
          },
          onLeaveBack: () => {
            document.body.classList.remove("horizontal-scrolling");
          },
          onLeave: () => {
            document.body.classList.remove("horizontal-scrolling");
          },
          onUpdate: () => {
            const button = document.querySelector(".btn");
            if (button instanceof HTMLElement) {
              button.style.pointerEvents = "auto"; // Ensure button remains interactive
            }
          },
          
          
        },
      });

      // Snap sections to each other when scrolling horizontally
      ScrollTrigger.create({
        trigger: scrollContainer,
        start: "top top",
        end: () => `+=${scrollHeight}`,
        snap: {
          snapTo: 1 / (totalSections - 1),
          duration: 0.5,
          ease: "power1.inOut",
        },
      });
    }

    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-[80%] min-h-screen">
      <div className="horizontal-scroll-container flex flex-nowrap">
        <div className="w-full flex-shrink-0 min-h-screen">
          <BackgroundBeamsWithCollision>
            <h1 className="uppercase text-4xl sm:text-6xl lg:text-6xl xl:text-9xl font-bold text-center leading-tight">
              WHY <br /> CHOOSE Hexvon
            </h1>
          </BackgroundBeamsWithCollision>
        </div>

        {/* Points - Why Choose Us */}
        <div className="w-full flex-shrink-0">
          <ChooseUsPoints />
        </div>

        {/* Additional sections for further content */}
        <div className="w-full flex-shrink-0">
          <OurImpression />
        </div>
        <div className="w-full flex-shrink-0">
          <Talk />
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
