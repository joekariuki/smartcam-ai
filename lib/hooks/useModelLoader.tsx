"use client";

import { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

export const useModelLoader = () => {
  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
      setIsLoaded(true);
      console.log("Model loaded");
    };

    loadModel();
  }, []);

  return { model, isLoaded };
};
