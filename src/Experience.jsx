/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Controls } from "./App";
import { useFrame } from "@react-three/fiber";
import { Airplane } from "./model/Airplane";
import { Vector3 } from "three";
import Boxes from "./model/Boxes";
import Clouds from "./model/Clouds";

let MOVEMENT_SPEED;

const Experience = ({ ready, setReady, intersection, setIntersection }) => {
  const sphere = useRef();
  const planePosition = [-25, -3, 0];

  const obstacleRef = useRef();

  const [, get] = useKeyboardControls();
  const vel = new Vector3();

  const [spawnRate, setSpawnRate] = useState(250);
  const frames = useRef(0);
  const [enemies, setEnemies] = useState([]);

  //Random Position of Y
  const minM = -20;
  const maxM = 20;
  const randomPosY = Math.floor(Math.random() * (maxM - minM + 1)) + minM;
  const posY = randomPosY;

  const movePlane = () => {
    vel.x = 0;
    vel.y = 0;
    vel.z = 0;

    if (get()[Controls.down]) {
      vel.y -= MOVEMENT_SPEED;
    }
    if (get()[Controls.up]) {
      vel.y += MOVEMENT_SPEED;
    }
    if (get()[Controls.left]) {
      vel.x -= MOVEMENT_SPEED;
    }
    if (get()[Controls.right]) {
      vel.x += MOVEMENT_SPEED;
    }
    sphere.current.setLinvel(vel, true);
  };

  const reset = () => {
    //plane gameobject
    sphere.current.setTranslation({ x: -25, y: -3, z: 0 });
    sphere.current.setLinvel({ x: 0, y: 0, z: 0 });
    sphere.current.setAngvel({ x: 0, y: 0, z: 0 });

    // //obstacle gameobject
    obstacleRef.current.setTranslation({ x: 35, y: 0, z: 0 });
    obstacleRef.current.setLinvel({ x: 0, y: 0, z: 0 });
  };

  useEffect(() => {
    if (intersection) {
      setTimeout(() => reset(), 90);
    }
  });

  useFrame(() => {
    if (intersection || !ready) {
      MOVEMENT_SPEED = 0;
    }
    if (ready) {
      MOVEMENT_SPEED = 6;
      obstacleRef.current.setLinvel({ x: -3, y: 0, z: 0 });
    }
    movePlane();

    if (frames.current % spawnRate === 0) {
      // Adjust spawnRate dynamically
      if (spawnRate > 20) setSpawnRate(spawnRate - 2);

      const newEnemy = (
        <RigidBody
          key={frames.current}
          ref={obstacleRef}
          position={[35, posY, 0]}
          rotation={[0, 3.2, 0]}
          colliders="cuboid"
          sensor
          onIntersectionEnter={() => {
            setIntersection(true);
            setReady(false);
          }}
        >
          <Boxes />
        </RigidBody>
      );

      setEnemies((prevEnemies) => [...prevEnemies, newEnemy]);
    }

    frames.current++;
  });

  return (
    <>
      <directionalLight position={[1, 2, 1]} intensity={2} />
      <ambientLight intensity={2} />
      <hemisphereLight skyColor="#FDB813" groundColor="#cfecf7" intensity={3} />
      <OrbitControls />
      <Clouds />
      <RigidBody
        colliders="trimesh"
        ref={sphere}
        position={planePosition}
        rotation={[0, -1.6, 0]}
      >
        <Airplane />
      </RigidBody>

      {/* <RigidBody
        ref={obstacleRef}
        position={[35, posY, 0]}
        rotation={[0, 3.2, 0]}
        colliders="cuboid"
        sensor
        onIntersectionEnter={() => {
          setIntersection(true);
          setReady(false);
        }}
      >
        <Boxes />
      </RigidBody> */}
      <group>{enemies}</group>
    </>
  );
};

export default Experience;
