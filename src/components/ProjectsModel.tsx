import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, MeshTransmissionMaterial } from '@react-three/drei';
import { Group } from 'three';

interface ProjectsModelProps {
  darkMode: boolean;
}

const ProjectsModel: React.FC<ProjectsModelProps> = ({ darkMode }) => {
  const torusRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      torusRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={torusRef}>
      <Torus args={[1, 0.4, 16, 32]}>
        <MeshTransmissionMaterial
          color={darkMode ? '#6366f1' : '#818cf8'}
          thickness={0.5}
          roughness={0.2}
          transmission={0.95}
          ior={1.5}
        />
      </Torus>
    </group>
  );
};

export default ProjectsModel;