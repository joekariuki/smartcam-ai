import CamViewer from "./components/cam-viewer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">SmartCam AI</h1>
      <h2 className="text-lg text-gray-700">
        An AI-powered smart webcam application that detects multiple objects in
        real-time
      </h2>
      <p>
        Wait for the model to load before clicking the button to enable the
        webcam - at which point it will become visible to use.
      </p>
      <CamViewer />
    </div>
  );
}
