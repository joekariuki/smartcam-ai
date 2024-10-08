import DetectableObjects from "@/components/detectable-objects";
import DevbrewCTA from "@/components/devbrew-cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import KeyMetrics from "@/components/key-metrics";
import ModelInfo from "@/components/model-info";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-grow container">
        <Hero />
        <Features />
        <HowItWorks />
        <ModelInfo />
        <UseCases />
        <KeyMetrics />
        <DetectableObjects />
        <DevbrewCTA />
      </main>
    </div>
  );
}
