import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const Cube = () => {
  return (
    <Canvas>
      <OrbitControls autoRotate={true} autoRotateSpeed={10} />
      <mesh rotation-x={1}>
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[5, 0, 5]} />
        <directionalLight color="white" position={[0, 5, 0]} />
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach="material" color={0xa3b18a} />
      </mesh>
    </Canvas>
  );
};
