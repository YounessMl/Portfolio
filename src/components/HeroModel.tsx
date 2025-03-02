import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Group } from 'three';

interface HeroModelProps {
  darkMode: boolean;
}

const HeroModel: React.FC<HeroModelProps> = ({ darkMode }) => {
  const sphereRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={sphereRef}>
      <Sphere args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color={darkMode ? '#6366f1' : '#818cf8'}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.5}
        />
      </Sphere>
    </group>
  );
};

export default HeroModel;