"use client";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { Mac } from "./components/Mac";
import Navbar from "./components/Navbar"; // Import Navbar

const AnimatedCamera = () => {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(-12, 12, -12); // Initial position
    }
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.lerp({ x: 5, y: 5, z: 5 }, 0.05); // Smooth transition
      cameraRef.current.lookAt(0, 0, 0); // Look at the center
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={45} />;
};

const index = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Logo Section */}
      <div className="relative">
        <img
          src="/logo.svg"
          alt="Logo"
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-100 h-auto"
          loading="lazy"
        />
      </div>

      {/* Mac Section */}
      <div className="flex justify-center items-center flex-grow mt-18">
        <div className="w-200 h-200">
          <Canvas>
            <Environment preset="studio" />
            <OrbitControls
              rotateSpeed={3.5}
              enableDamping={true}
              dampingFactor={0.1}
              autoRotate={true}
              autoRotateSpeed={0.5}
              minDistance={100} // Prevent zooming in too close
              maxDistance={100} // Prevent zooming out too far
            />
            <AnimatedCamera />
            <Mac />
          </Canvas>
        </div>
      </div>

      {/* Navbar Section */}
      <Navbar />
    </div>
  );
};

export default index;