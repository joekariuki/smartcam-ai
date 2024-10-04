"use client";

import React, { useState } from "react";
import CamViewer from "@/components/cam-viewer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          SmartCam AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered smart webcam application that detects specific objects in
          real time.
        </p>
        <div className="flex justify-center space-x-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg">Try for free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] min-h-screen flex flex-col">
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                <p>
                  Wait for the model to load before clicking the button to
                  enable the webcam - at which point it will become visible to
                  use.
                </p>
                <p className="text-white">Camera feed would appear here</p>
                <CamViewer />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero;
