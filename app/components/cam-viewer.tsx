"use client";

import { useEffect, useRef, useState } from "react";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

const CamViewer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [model, setModel] = useState<any | undefined>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const liveViewRef = useRef<HTMLDivElement>(null);
  const demosSectionRef = useRef<HTMLDivElement>(null);
  const enableWebcamButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const getUserMediaSupport = () => {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    };

    // If webcam supported, add event listener to button for when user
    // wants to activate it to call enableCam
    if (getUserMediaSupport()) {
      // enableWebcamButton.addEventListener("click", enableCam);
      setDisabled(false);
      setIsLoaded(true);
    } else {
      console.warn("getUserMedia() is not supported by your browser");
      alert("This browser is not support for webcam functionality");
    }

    cocoSsd.load().then(function (loadedModel: any) {
      setModel(loadedModel);
      // Show demo section now model is ready to use.
      demosSectionRef.current?.classList.remove("invisible");
    });
  }, []);

  const enableCam = (event: React.MouseEvent<HTMLButtonElement>) => {
    const model = true;

    if (!model) {
      return;
    }

    // Hide button clicked once clicked
    if (enableWebcamButtonRef.current) {
      enableWebcamButtonRef.current.classList.add("removed");
    }

    // getUsermedia parameters to force video but not audio
    const constraints = {
      video: true,
    };

    // Activate the webcam stream
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("loadeddata", predictWebcam);
      }
    });
  };

  const predictWebcam = () => {
    console.log("Predicting webcam data...");
  };

  return (
    <section
      id="demos"
      ref={demosSectionRef}
      className={`${
        isLoaded ? "opacity-100" : "opacity-40"
      } text-center max-w-5xl mx-auto my-12 space-y-4 transition-opacity ease-in-out`}
    >
      <p>
        Hold some objects up close to your webcam to get a real-time
        classification! When ready click "enable webcam" below and accept access
        to the webcam when the browser asks (check the top left of your window)
      </p>

      <div id="liveView" className="camView" ref={liveViewRef}>
        <button
          id="webcamButton"
          ref={enableWebcamButtonRef}
          className="bg-blue-500 text-white p-2"
          onClick={enableCam}
          disabled={disabled}
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
      </div>
    </section>
  );
};

export default CamViewer;
