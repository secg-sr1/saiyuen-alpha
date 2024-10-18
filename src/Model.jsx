import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';

export default function Model() {
  return (
    <>
      {/* Video background element */}
      <video
        id="videoBackground"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        autoPlay
        playsInline
      />

      {/* Canvas for 3D rendering */}
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{ position: 'relative' }}
      >
        <Scene />
      </Canvas>
    </>
  );
}
