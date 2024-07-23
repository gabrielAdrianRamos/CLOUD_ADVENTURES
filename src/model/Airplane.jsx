/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HELIX_SPEED = 10;

export function Airplane(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/airplane.glb");

  const helix = useRef();

  useFrame((_state, delta) => {
    helix.current.rotation.y += delta * HELIX_SPEED;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cylinder" position={[0, 3.026, 0]}>
          <mesh
            name="Cylinder_1"
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Blue}
          />
          <mesh
            name="Cylinder_2"
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Sand}
          />
          <mesh
            name="Cylinder_3"
            geometry={nodes.Cylinder_3.geometry}
            material={materials.Gray}
          />
          <group
            ref={helix}
            name="Cylinder001"
            position={[0, 0, -2.008]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Cylinder001_1"
              geometry={nodes.Cylinder001_1.geometry}
              material={materials.Gray}
            />
            <mesh
              name="Cylinder001_2"
              geometry={nodes.Cylinder001_2.geometry}
              material={materials.blades}
            />
            <mesh
              name="Cylinder001_3"
              geometry={nodes.Cylinder001_3.geometry}
              material={materials.Sand}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/airplane.glb");
