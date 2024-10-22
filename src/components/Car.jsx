"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Line } from "@react-three/drei";
import Earth from "../../public/Earth";

function LabeledBentLine({ start, bend, end, label }) {
  return (
    <>
      <Line
        points={[start, bend, end]} // Array of points: start, bend, and end
        color="gray" // Line color
        lineWidth={1} // Line width
      />
      <Html position={end}>
        <div
          style={{
            color: "white",
            
            padding: "4px",
            borderRadius: "4px",
          }}

          className="border border-gray-900 backdrop-blur-2xl"
        >
          {label}
        </div>
      </Html>
    </>
  );
}

const Car = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black flex items-center">
      <div className="w-[80vw] h-full m-auto">
        <Canvas
          camera={{ position: [1.2, 1.2, 1.2] }} // Fixing the camera at a specific zoom level (adjust the position)
        >
          <ambientLight  />
          <OrbitControls
            enableZoom={false} // Disables zooming
            enablePan={false} // Optional: Disable panning if you don't want any movement
            minPolarAngle={Math.PI / 4} // Restricts vertical rotation (upwards/downwards)
            maxPolarAngle={Math.PI / 2} // Restricts vertical rotation (upwards/downwards)
            maxAzimuthAngle={Infinity} // Allows full horizontal rotation
            minAzimuthAngle={-Infinity} // Allows full horizontal rotation
          />
          <Earth />
          <Environment preset="sunset" />

          {/* Example of labeled bent lines */}
          <LabeledBentLine
            start={[1, 0, 0]} // Starting point (vertex)
            bend={[1, 0.5, 0]} // Bend point (90-degree angle)
            end={[1.1, 0.5, -0.2]} // Bring the end point closer to the bend point
            label="Engine Hood"
          />
          
          <LabeledBentLine
            start={[1.1, 0, 0.4]} // Starting point (vertex)
            bend={[1.1, 0.2, 0.4]} // Bend point (90-degree angle)
            end={[1.0, 0.3, 0.8]} // Bring the end point closer to the bend point
            label="Head Light"
          />

          <LabeledBentLine
            start={[1.18, -0.25, 0]} // Starting point (vertex)
            bend={[1.4, 0.1, 0]} // Bend point (90-degree angle)
            end={[1.4, 0.15, -0.3]} // Bring the end point closer to the bend point
            label="Front Bumper"
          />

          <LabeledBentLine
            start={[0, 0.3, 0]} // Starting point (vertex)
            bend={[0, 0.5, 0]} // Bend point (90-degree angle)
            end={[0, 0.6, 1]} // End point for the label
            label="Roof"
          />
          
          <LabeledBentLine
            start={[0, 0.1, -0.5]} // Starting point (vertex)
            bend={[0, 0.4, -0.8]} // Bend point (90-degree angle)
            end={[0, 0.4, -1.2]} // End point for the label
            label="Door"
          />
          <LabeledBentLine
            start={[0, -0.25, 0.5]} // Starting point (vertex)
            bend={[0, 0.4, 0.8]} // Bend point (90-degree angle)
            end={[0, 0.4, 1.2]} // End point for the label
            label="Side Skirt"
          />
          <LabeledBentLine
            start={[0, 0.2, -0.37]} // Starting point (vertex)
            bend={[0, 0.7, -0.8]} // Bend point (90-degree angle)
            end={[0, 0.7, -1.2]} // End point for the label
            label="Wind Mirrore"
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Car;
