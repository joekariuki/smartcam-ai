"use client";

import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const CamViewer = () => {
  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [predictions, setPredictions] = useState<cocoSsd.DetectedObject[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const demosSectionRef = useRef<HTMLElement>(null);
  const enableWebcamButtonRef = useRef<HTMLButtonElement>(null);
  const liveViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeTensorFlow = async () => {
      await tf.ready();
      if (tf.getBackend() !== "webgl") {
        try {
          await tf.setBackend("webgl");
          console.log("WebGL backend initialized");
        } catch (error) {
          console.error("Failed to set WebGL backend:", error);
          console.log("Falling back to CPU backend");
          await tf.setBackend("cpu");
        }
      }
      console.log("Current backend:", tf.getBackend());
    };

    const loadModel = async () => {
      await initializeTensorFlow();
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
      setModelLoaded(true);
      setIsLoaded(true);
      console.log("Model loaded");
      demosSectionRef.current?.classList.remove("invisible");
    };

    loadModel();
  }, []);

  const enableCam = async () => {
    if (!modelLoaded) {
      console.warn("Model not loaded yet. Please wait.");
      return;
    }

    if (enableWebcamButtonRef.current) {
      enableWebcamButtonRef.current.classList.add("removed");
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("loadeddata", predictWebcam);
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const predictWebcam = async () => {
    if (!model || !videoRef.current) {
      console.warn("Model or video not ready. Retrying...");
      requestAnimationFrame(predictWebcam);
      return;
    }

    const predictions = await model.detect(videoRef.current);
    setPredictions(predictions);

    requestAnimationFrame(predictWebcam);
  };

  return (
    <section
      id="demos"
      ref={demosSectionRef}
      className={`${
        modelLoaded ? "opacity-100" : "opacity-40"
      } text-center max-w-5xl mx-auto my-12 space-y-4 transition-opacity ease-in-out`}
    >
      <p>
        Hold some objects up close to your webcam to get a real-time
        classification! When ready click "enable webcam" below and accept access
        to the webcam when the browser asks (check the top left of your window)
      </p>

      <div id="liveView" className="camView relative" ref={liveViewRef}>
        <button
          id="webcamButton"
          ref={enableWebcamButtonRef}
          className="bg-blue-500 text-white p-2"
          onClick={enableCam}
          disabled={!isLoaded}
        >
          Enable Webcam
        </button>
        {isLoaded && (
          <video
            id="webcam"
            ref={videoRef}
            autoPlay
            muted
            width="640"
            height="480"
          />
        )}
        {predictions.map((prediction, index) => (
          <div key={index}>
            <p
              style={{
                marginLeft: prediction.bbox[0],
                marginTop: prediction.bbox[1] - 10,
                width: prediction.bbox[2] - 10,
                top: 0,
                left: 0,
              }}
              className="absolute text-white text-sm font-bold bg-black bg-opacity-50 p-1"
            >
              {prediction.class} - {Math.round(prediction.score * 100)}%
            </p>
            <div
              className="absolute border-2 border-green-400 bg-green-400 bg-opacity-25"
              style={{
                left: prediction.bbox[0],
                top: prediction.bbox[1],
                width: prediction.bbox[2],
                height: prediction.bbox[3],
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CamViewer;
