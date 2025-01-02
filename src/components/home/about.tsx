import Image from "next/image";
import RippleButton from "../custom-ui/RippleButton";

const About = () => {
 
  return (
    <section className="min-h-screen mt-24 mb-60">
      <div className="flex flex-col md:flex-row w-full max-w-full">
        <div className="flex-1 p-0 sticky">
          <Image
            src={"/about.jpg"}
            alt="Description"
            width={600}
            height={600}
            className="w-full mx-auto md:size-[300px] lg:size-[450px] xl:size-[600px] object-cover animate-fade-in"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <p className="lg:text-lg xl:text-xl font-semibold text-primary">
                WHO WE ARE
              </p>
              <div className="flex-grow border-t-2 border-white/20 " />
            </div>

            <div>
              <h2 className="h2-bold animate-slide-up">
                WE ARE LEADING <br /> WEB DEVELOPMENT AGENCY.
              </h2>
            </div>
            <div className="border-l mt-2 ml-4 border-white/20 p-4 flex flex-col">
              <p className="mt-4 md:text-sm lg:text-lg lg:mt-10 mx-auto text-left xl:w-3/4 text-white/50 animate-slide-up">
                We’re a team of strategic digital marketing experts working
                globally with the largest brands. We believe that progress only
                happens when you refuse to play it safe. We combine ideas,
                behaviors, and insights with design, technology, and data to
                produce brand experiences that customers love.
              </p>

              {/* Circular button */}
             <RippleButton title="Explore us"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
