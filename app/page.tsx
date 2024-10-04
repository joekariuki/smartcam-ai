import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import ModelInfo from "@/components/model-info";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-grow container">
        <Hero />
        <Features />
        <HowItWorks />
        <ModelInfo />
      </main>
    </div>
  );
}
