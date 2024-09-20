"use client";

import { useState, useRef, useCallback } from "react";

export const useWebcam = () => {
  const [isWebcamEnabled, setIsWebcamEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const enableWebcam = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsWebcamEnabled(true);
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  }, []);

  return { videoRef, isWebcamEnabled, enableWebcam };
};
