/* eslint-disable react/no-unknown-property */
// import { Cloud } from "@react-three/drei";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Clouds = () => {
  const sky = useGLTF("/cloud.glb");
  const skyRef = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.09 * delta;
  });
  return (
    <>
      <mesh ref={skyRef} scale={0.091}>
        <primitive object={sky.scene} />
      </mesh>
    </>
  );
};

export default Clouds;
