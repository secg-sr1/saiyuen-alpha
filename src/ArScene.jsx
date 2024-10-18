import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useGesture } from '@use-gesture/react';

const ARScene = () => {
  const modelRef = useRef();
  const videoRef = useRef();
  const [currentCameraFacing, setCurrentCameraFacing] = useState('environment');

  useEffect(() => {
    // Function to start camera with the specified facing mode
    const startCamera = (facingMode) => {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: facingMode } } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.error('Error accessing webcam: ', err);
        });
    };

    // Start with the environment camera
    startCamera(currentCameraFacing);

    // Dynamically import AR.js to avoid redeclaration issues
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.3.2/aframe/build/aframe-ar-nft.min.js';
    script.onload = () => console.log('AR.js loaded successfully');
    script.onerror = () => console.error('Failed to load AR.js');
    document.body.appendChild(script);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      'https://cdn.glitch.com/d2f9544e-96dc-44d9-b842-b7b9535cbc18%2FsaiyuenTrail_01_Suspension_01035P20y12.glb?v=1623294296664',
      (gltf) => {
        if (modelRef.current) {
          modelRef.current.add(gltf.scene);
        }
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // Watch the user's position and update visibility based on a 10-meter radius
    const targetLat = 14.620821028226425;
    const targetLon = -90.55623229821255;
    const radius = 10; // Radius in meters

    function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
      const R = 6371e3; // Radius of Earth in meters
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
    }

    navigator.geolocation.watchPosition((position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;
      const distance = getDistanceFromLatLonInMeters(userLat, userLon, targetLat, targetLon);

      const arModel = modelRef.current;

      if (arModel) {
        arModel.visible = distance <= radius;
      }
    });

    // Fallback for browsers without WebXR or WebAR capabilities
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
    }
  }, [currentCameraFacing]);

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      if (modelRef.current) {
        modelRef.current.rotation.y = x * 0.01;
        modelRef.current.rotation.x = y * 0.01;
      }
    },
  });

  const toggleCamera = () => {
    setCurrentCameraFacing((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', margin: 0, overflow: 'hidden' }} {...bind()}>
      {/* Webcam Video Background */}
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Button
        onClick={toggleCamera}
        variant="contained"
        style={{ position: 'absolute', top: 10, left: 10, zIndex: 9999 }}
      >
        Toggle Camera
      </Button>
      <Canvas style={{ position: 'relative', zIndex:99999 }}>
        {/* GLTF Model */}

        <PerspectiveCamera ref={ cameraRef } />

        <group ref={modelRef} position={[0, 5, 0]} scale={[5, 5, 5]} />
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      </Canvas>
    </Box>
  );
};

export default ARScene;

// To use this component, include <ARScene /> in your main App component or wherever needed.