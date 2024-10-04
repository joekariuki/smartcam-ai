import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 py-16 md:py-24 max-w-7xl"
    >
      <div className="mb-12 space-y-4">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <p className="text-lg text-gray-600 text-center">
          SmartCam AI uses advanced AI algorithms and the COCO-SSD model to
          transform your webcam into a powerful real-time object detection tool.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <ol className="space-y-4">
            <li className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <p>
                <strong>Connect:</strong> Your webcam connects to SmartCam AI
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <p>
                <strong>Load Model:</strong> COCO-SSD model is loaded using
                TensorFlow.js
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <p>
                <strong>Detect:</strong> AI analyzes the video feed in real-time
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <p>
                <strong>Identify:</strong> Objects are identified and labeled
                instantly
              </p>
            </li>
          </ol>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Powered by COCO-SSD</h3>
          <p className="mb-4">
            SmartCam AI utilizes the COCO-SSD (Common Objects in Context -
            Single Shot MultiBox Detection) model, which is pre-trained by
            Google and loaded onto the page using TensorFlow.js.
          </p>
          <p>
            This powerful combination allows for fast, accurate object detection
            directly in your browser, without the need for server-side
            processing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
