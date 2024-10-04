import Link from "next/link";
import React from "react";

const ModelInfo = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          The COCO-SSD Model
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">What is COCO-SSD?</h3>
            <p className="mb-4">
              The{" "}
              <span className="underline underline-offset-4 hover:text-gray-500">
                <Link
                  href="https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd"
                  target="_blank"
                >
                  COCO-SSD model
                </Link>
              </span>{" "}
              uses the Common Objects in Context (COCO) dataset and the Single
              Shot MultiBox Detection (SSD) model architecture.
            </p>
            <p>
              This combination allows for efficient and accurate object
              detection, providing both bounding box coordinates and labels for
              detected objects.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Pre-trained by{" "}
                <span className="underline underline-offset-4 hover:text-gray-500">
                  <Link href="https://ai.google/" target="_blank">
                    Google AI
                  </Link>
                </span>{" "}
                for high accuracy
              </li>
              <li>Can recognize 80 common objects out of the box</li>
              <li>Provides object localization with bounding boxes</li>
              <li>
                Runs efficiently in the browser using{" "}
                <span className="underline underline-offset-4 hover:text-gray-500">
                  <Link href="https://www.tensorflow.org/js" target="_blank">
                    TensorFlow.js
                  </Link>
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelInfo;
