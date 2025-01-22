import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import ChooseUsPoints from "./chooseUsPoints";
import OurImpression from "./ourImpression";
import Talk from "./talk";

const ChooseUsSmall = () => {
  return (
    <section className="font-inter w-full">
      <BackgroundBeamsWithCollision>
        <div className=" ">
          <h1 className="uppercase text-4xl sm:text-7xl xl:text-9xl font-bold text-center leading-tight">
            WHY <br /> CHOOSE Hexvon
          </h1>
        </div>
      </BackgroundBeamsWithCollision>
      {/* points why choose us */}
      <div>
        <ChooseUsPoints />
      </div>
      <div>
        <OurImpression />
      </div>
      <div>
        <Talk />
      </div>
    </section>
  );
};

export default ChooseUsSmall;
