import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  controls?: boolean;
  autoRotate?: boolean;
}

const Scene3D: React.FC<Scene3DProps> = ({ 
  children, 
  className = "", 
  controls = false,
  autoRotate = false
}) => {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          {children}
        </Suspense>
        {controls && <OrbitControls autoRotate={autoRotate} />}
      </Canvas>
    </div>
  );
};

export default Scene3D;