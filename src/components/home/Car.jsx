"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Line } from "@react-three/drei";
import Earth from "../../../public/Earth";

function LabeledBentLine({ start, bend, end, label }) {
  return (
    <>
      <Line
        points={[start, bend, end]} // Array of points: start, bend, and end
        color="gray" // Line color
        lineWidth={1.8} // Line width
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

function RotatingEarth({ isInteracting }) {
  const earthRef = useRef();

  // Rotate the Earth only when the user is not interacting
  useFrame(() => {
    if (!isInteracting && earthRef.current) {
      earthRef.current.rotation.y += 0.005; // Adjust speed as needed
    }
  });

  return (
    <mesh ref={earthRef}>
      <Earth />
      {/* Example of labeled bent lines */}
      <LabeledBentLine
        start={[-2.5, 0.3, 0]}
        bend={[-2.7, 0.8, 0]}
        end={[-3.4, 1, 0]}
        label="Front Bumper"
      />
      <LabeledBentLine
        start={[-2.38, 1, 0.6]}
        bend={[-2.4, 1.2, 0.6]}
        end={[-2.8, 1.2, 1.5]}
        label="Head Light"
      />
      <LabeledBentLine
        start={[-1.7, 1.0, 0]}
        bend={[-1.9, 1.6, 0]}
        end={[-2.6, 1.8, 0]}
        label="Engine Hood"
      />
      <LabeledBentLine
        start={[0, 1.7, 0]}
        bend={[0, 2.3, 0]}
        end={[0, 2.3, 1]}
        label="Roof"
      />
      <LabeledBentLine
        start={[-0.2, 0.9, 0.9]}
        bend={[-0.2, 1.4, 1.5]}
        end={[-0.2, 1.4, 2]}
        label="Door"
      />
      <LabeledBentLine
        start={[-2.1, 0.9, 0.9]}
        bend={[-2.1, 1.4, 1.2]}
        end={[-2.1, 1.4, 1.8]}
        label="Front Fender"
      />
      <LabeledBentLine
        start={[2, 0.9, 0.9]}
        bend={[2, 1.5, 1.2]}
        end={[2, 1.5, 1.8]}
        label="Rear Fender"
      />
      <LabeledBentLine
        start={[0.4, 0.45, 1]}
        bend={[0.4, 0.9, 1.2]}
        end={[0.4, 0.9, 1.6]}
        label="Side Skirt"
      />
      <LabeledBentLine
        start={[2.55, 0.55, 0]}
        bend={[2.6, 0.9, 0]}
        end={[3, 0.9, 0]}
        label="Rear Bumper"
      />
      <LabeledBentLine
        start={[-0.8, 1.2, -1]}
        bend={[-0.8, 1.5, -1.5]}
        end={[-0.8, 1.5, -2.0]}
        label="Wind Mirror"
      />
      <LabeledBentLine
        start={[-0.87, 1.3, -0.8]}
        bend={[-0.87, 1.9, -1.2]}
        end={[-0.87, 1.9, -1.8]}
        label="Pillar"
      />
    </mesh>
  );
}

const Car = () => {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw] bg-black flex items-center">
      <div className="w-[80vw] h-full m-auto">
        <Canvas camera={{ position: [2.9, 2, 2.9] }}>
          {" "}
          {/* Adjust to your preferred fixed position */}
          <ambientLight />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3} // Lock polar rotation to keep x-axis fixed
            maxPolarAngle={Math.PI / 3} // Lock polar rotation to keep x-axis fixed
            minAzimuthAngle={-Infinity} // Allow full rotation on the y-axis
            maxAzimuthAngle={Infinity} // Allow full rotation on the y-axis
            onStart={() => setIsInteracting(true)} // Stop rotation on interaction
            onEnd={() => setIsInteracting(false)} // Resume rotation when interaction ends
          />
          <RotatingEarth isInteracting={isInteracting} />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
};

export default Car;
