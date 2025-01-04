import Hero from "@/components/home/hero";
import Testimonial from "@/components/home/testimonial";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Hero />
      <Testimonial />
    </main>
  );
}
