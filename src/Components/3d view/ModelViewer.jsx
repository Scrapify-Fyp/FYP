// src/ModelViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';

const Model = () => {
  // Load the GLTF model
  const { scene } = useGLTF('https://threejs.org/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb');
  
  return (
    <primitive object={scene} />
  );
};

const ModelViewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
