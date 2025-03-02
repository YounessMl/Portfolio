import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshWobbleMaterial } from '@react-three/drei';
import { Group } from 'three';

interface SkillsModelProps {
  darkMode: boolean;
}

const SkillsModel: React.FC<SkillsModelProps> = ({ darkMode }) => {
  const groupRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1, 1]} position={[0, 0, 0]}>
        <MeshWobbleMaterial
          color={darkMode ? '#6366f1' : '#818cf8'}
          factor={0.4}
          speed={2}
          roughness={0.7}
        />
      </Icosahedron>
    </group>
  );
};

export default SkillsModel;