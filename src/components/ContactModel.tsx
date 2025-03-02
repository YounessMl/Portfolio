import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Dodecahedron, MeshDistortMaterial } from '@react-three/drei';
import { Group } from 'three';

interface ContactModelProps {
  darkMode: boolean;
}

const ContactModel: React.FC<ContactModelProps> = ({ darkMode }) => {
  const modelRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      modelRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.3) * 0.3;
    }
  });

  return (
    <group ref={modelRef}>
      <Dodecahedron args={[1, 0]}>
        <MeshDistortMaterial
          color={darkMode ? '#6366f1' : '#818cf8'}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
        />
      </Dodecahedron>
    </group>
  );
};

export default ContactModel;