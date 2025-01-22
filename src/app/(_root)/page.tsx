import Hero from "@/components/home/hero";
import Testimonial from "@/components/home/testimonial";
import ChooseUS from "@/components/home/chooseus/chooseUs";
import About from "@/components/home/about";
import ChooseUsSmall from "@/components/home/chooseus/chooseUsSmall";
import Relax from "@/components/home/relax";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Hero />
      <About />
      <Relax />
      <div className="hidden xl:block">
        <ChooseUS />
      </div>
      <div className=" xl:hidden">
        <ChooseUsSmall />
      </div>
      <Testimonial />
    </main>
    
  );
}
