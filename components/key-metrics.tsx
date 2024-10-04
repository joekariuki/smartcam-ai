import React from "react";

const KeyMetrics = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          SmartCam AI: Key Metrics & Performance Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">80+</p>
            <p className="text-gray-600">Detectable Objects</p>
          </div>
          <div>
            <p className="text-4xl font-bold">99%</p>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10ms</p>
            <p className="text-gray-600">Average Detection Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
