import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshNormalMaterial, IcosahedronGeometry } from 'three';
import { Edges } from '@react-three/drei';

const IcosahedronModel: React.FC = () => {
const meshRef = useRef<THREE.Mesh>(null);

// Animation loop - rotate the mesh
useFrame(() => {
    if (meshRef.current) {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    }
});

return (
    <group position={[0, 0, 0]}>
    <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshNormalMaterial flatShading />
        <Edges
        scale={1.02}
        threshold={15} // Display edges only when angle between faces exceeds 15 degrees
        color="white"
        />
    </mesh>
    </group>
);
};

export default IcosahedronModel;

