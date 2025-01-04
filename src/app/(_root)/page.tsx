import Hero from "@/components/home/hero";
import About from "@/components/home/about";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <Hero />
      <About />
    </main>
    
  );
}
