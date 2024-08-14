/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Missile(props) {
  const { nodes, materials } = useGLTF("/missile.glb");
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        geometry={nodes.Sphere_2.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        geometry={nodes.Sphere_3.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        geometry={nodes.Sphere_4.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.Sphere_5.geometry}
        material={materials["Material.005"]}
      />
    </group>
  );
}

useGLTF.preload("/missile.glb");
