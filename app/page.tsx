import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
