


import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = ({ addImage }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user');
  const [zoom, setZoom] = useState(1);
  const [aspectRatio, setAspectRatio] = useState('16:9');

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    addImage(imageSrc);
  };

  return (
    <div className="my-8 bg-white shadow-md p-6 rounded-lg w-full max-w-lg">
      <div className="relative w-full flex justify-center">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            facingMode,
            width: aspectRatio === '16:9' ? 1280 : aspectRatio === '4:3' ? 1024 : 720,
            height: aspectRatio === '16:9' ? 720 : aspectRatio === '4:3' ? 768 : 720,
          }}
          style={{ transform: `scale(${zoom})` }}
          className="rounded-md border border-gray-300"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 items-center">
        <button
          onClick={() => setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 w-full"
        >
          Toggle Camera
        </button>
        <button
          onClick={capture}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 w-full"
        >
          Capture
        </button>
        <div className="w-full mt-4">
          <label className="block text-gray-700 font-bold mb-1">Zoom:</label>
          <input
            type="range"
            min="1"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="w-full mt-4">
          <label className="block text-gray-700 font-bold mb-1">Aspect Ratio:</label>
          <select
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 w-full"
          >
            <option value="16:9">16:9</option>
            <option value="4:3">4:3</option>
            <option value="1:1">1:1</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Camera;
