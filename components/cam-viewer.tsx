"use client";

import React, { useState, useRef, useCallback } from "react";
import { useModelLoader } from "@/lib/hooks/use-model-loader";
import { useWebcam } from "@/lib/hooks/use-webcam";
import { PredictionOverlay } from "@/components/prediction-overlay";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { Button } from "@/components/ui/button";

const CamViewer: React.FC = () => {
  const { model, isLoaded } = useModelLoader();
  const { videoRef, isWebcamEnabled, enableWebcam } = useWebcam();
  const [predictions, setPredictions] = useState<cocoSsd.DetectedObject[]>([]);
  const liveViewRef = useRef<HTMLDivElement>(null);

  const predictWebcam = useCallback(async () => {
    if (!model || !videoRef.current) {
      console.warn("Model or video not ready. Retrying...");
      requestAnimationFrame(predictWebcam);
      return;
    }

    const predictions = await model.detect(videoRef.current);
    setPredictions(predictions);

    requestAnimationFrame(predictWebcam);
  }, [model, videoRef]);

  const handleEnableWebcam = useCallback(async () => {
    await enableWebcam();
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", predictWebcam);
    }
  }, [enableWebcam, predictWebcam, videoRef]);

  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div
        className={`text-center max-w-5xl mx-auto space-y-4 transition-opacity ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-40"
        }`}
      >
        <p className="mb-4">
          Hold some objects up close to your webcam to get a real-time
          classification! When ready click "enable webcam" below and accept
          access to the webcam when the browser asks (check the top left of your
          window)
        </p>

        <div id="liveView" className="camView relative" ref={liveViewRef}>
          {!isWebcamEnabled && (
            <Button
              variant="default"
              onClick={handleEnableWebcam}
              disabled={!isLoaded}
            >
              Enable Webcam
            </Button>
          )}
          {isLoaded && (
            <div
              className="relative mx-auto"
              style={{ width: 640, height: 480 }}
            >
              <video
                id="webcam"
                ref={videoRef}
                autoPlay
                muted
                width="640"
                height="480"
                className="absolute top-0 left-0"
              />
              <PredictionOverlay predictions={predictions} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CamViewer;
