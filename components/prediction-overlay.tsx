import React from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

interface PredictionOverlayProps {
  predictions: cocoSsd.DetectedObject[];
}

export const PredictionOverlay: React.FC<PredictionOverlayProps> = ({
  predictions,
}) => {
  return (
    <>
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
    </>
  );
};
