import React from "react";

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="container mx-auto px-4 py-16 md:py-24 max-w-7xl"
    >
      <div className="mb-12 space-y-4">
        <h2 className="text-3xl font-bold text-center"> Featured Use Cases</h2>
        <p className="text-lg text-gray-600 text-center">
          SmartCam AI can be extended to cater to a variety of use cases, from
          enhancing safety to studying wildlife, and optimizing retail
          experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Home Security</h3>
          <p className="text-gray-600">
            Integrate with systems like Google Nest for enhanced home monitoring
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Wildlife Monitoring</h3>
          <p className="text-gray-600">
            Track and study animal behavior in their natural habitats
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Retail Analytics</h3>
          <p className="text-gray-600">
            Analyze customer behavior and optimize store layouts
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
