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
      {/* <Cloud volume={5} position={[25, 11, -10]} />
      <Cloud volume={4} position={[-2, 4, -10]} />
      <Cloud volume={5} position={[-23, 9, -10]} />
      <Cloud volume={6} position={[20, -4, -10]} />
      <Cloud volume={5} position={[5, -8.5, -10]} />
      <Cloud volume={5} position={[-18, -10, -10]} /> */}
    </>
  );
};

export default Clouds;
