"use client";
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Line } from "@react-three/drei";
import Earth from '../../public/Earth'

function LabeledBentLine({ start, bend, end, label }) {
    return (
      <>
        {/* L-shaped line connecting the point, bend, and the label */}
        <Line
          points={[start, bend, end]} // Array of points: start, bend, and end
          color="gray"               // Line color
          lineWidth={1}               // Line width
        />
        {/* Label at the end of the line */}
        <Html position={end}>
          <div style={{ color: 'white', background: 'transparent', padding: '4px', borderRadius: '4px' }}>
            {label}
          </div>
        </Html>
      </>
    );
  }
  

const Car = () => {
    return (
        <div className="h-[100vh] w-[100vw] bg-black flex items-center">
         <div className='w-[80vw] h-full m-auto'>
         <Canvas >
            <ambientLight />
            <OrbitControls />
            <Earth />
            <Environment preset="sunset" />
          <LabeledBentLine
            start={[1, 0, 0]}  // Starting point (vertex)
            bend={[1, 1, 0]}   // Bend point (90-degree angle)
            end={[1, 1.2, -1.2]}    // End point for the label
            label="Vertex 1"
          />
          <LabeledBentLine
            start={[0, 0, 0]}  // Starting point (vertex)
            bend={[0, 1, 0]}   // Bend point (90-degree angle)
            end={[0, 1.2, 1.2]}    // End point for the label
            label="Vertex 1"
          />
          </Canvas>
         </div>
    
        </div>
      );
}

export default Car
