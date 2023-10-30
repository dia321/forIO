import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, CameraControls } from '@react-three/drei';
//@ts-expect-error: pnp system error
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const TyrannoMesh = () => {
  const gltf = useLoader(GLTFLoader, './tyranno/scene.gltf');
  return (
    <primitive object={gltf.scene} position={[0, -0.6, 0]} rotation={[0.2, -1.6, 0]} scale={1.2} />
  );
};

const Tyranno = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <CameraControls />
        <TyrannoMesh />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};
export default Tyranno;
