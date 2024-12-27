import Image from "next/image";
import aboutImg from "../../../public/about.png";

const About = () => {
  return (
    <section className="bg-white w-full">
      <div className="flex justify-center items-center w-full pt-20">
        <div className="flex w-full max-w-full">
          {" "}
          {/* Increase space-x-4 to space-x-8 */}
          {/* First Div with Image */}
          <div className="flex-1 p-0">
            <Image
              src={aboutImg}
              alt="Description"
              className="w-[620px] h-[600px] object-cover"
            />
          </div>
          {/* Second Div with 2 nested divs (Text, Divider, and bordered content) */}
          <div className="flex-1">
            <div className="flex flex-col space-y-4">
              {/* First div with text and divider on the same line */}
              <div className="flex items-center space-x-4">
                {/* Text */}
                <div className="text-xl font-semibold">
                  <p>WHO WE ARE</p>
                </div>

                {/* Divider */}
                <div className="flex-grow border-t-2 border-gray-400" />
              </div>

              {/* Heading with text split into 3 lines */}
              <div>
                <h2 className="text-6xl font-bold space-y-2">
                  <span className="block">WE ARE LEADING</span>
                  <span className="block">WEB DEVELOPMENT</span>
                  <span className="block">AGENCY.</span>
                </h2>
              </div>

              {/* Second div with border and button */}
              <div className="border-l-4 mt-2 ml-4 border-gray-500 p-4 flex flex-col ">
                <div className="flex text-center justify-center">
                  <p className="mb-2 mt-10 w-[360px] mr-36">
                    We’re a team of strategic mdigital marketing working
                    globally with largest brands, We believe that progress only
                    happens when you refused to play things safe. We combine
                    ideas and behaviors, and insights with design, technological
                    data to produce brand experiences that customers love our
                    services.
                  </p>
                </div>
                {/* Circular button */}
                <div className="mb-14">
                  <button className="border border-black text-black rounded-full w-32 h-32 flex justify-center items-center mt-5 ml-32">
                    Explore us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
