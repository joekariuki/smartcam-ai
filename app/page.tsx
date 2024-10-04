import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-grow container">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
