import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Sphere, Cylinder } from "@react-three/drei";

const MathQuestGame = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1a2e" }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Box */}
        <Box position={[-2, 1, 0]}>
          <meshStandardMaterial attach="material" color="blue" />
        </Box>
        
        {/* Sphere */}
        <Sphere position={[0, 1, 0]}>
          <meshStandardMaterial attach="material" color="red" />
        </Sphere>
        
        {/* Cylinder */}
        <Cylinder position={[2, 1, 0]} args={[0.5, 0.5, 2, 32]}>
          <meshStandardMaterial attach="material" color="green" />
        </Cylinder>
        
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MathQuestGame;
