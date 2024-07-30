/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const Boxes = () => {
  const { scene } = useGLTF("/missile.glb");

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Boxes;
