import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const DevbrewCTA = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Build Your Custom AI Application
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with Devbrew to create your own AI-powered solution tailored
            to your needs.
          </p>
          <Link href="https://www.devbrew.co/" target="_blank">
            <Button size="lg">
              Contact Devbrew
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DevbrewCTA;
