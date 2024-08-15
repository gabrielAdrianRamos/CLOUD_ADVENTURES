/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Experience from "./Experience";
import { useMemo, useState } from "react";
import { KeyboardControls } from "@react-three/drei";
import Overlay from "./Overlay";

export const Controls = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};

function App() {
  const map = useMemo(() => [
    { name: Controls.up, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.down, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  ]);

  const [ready, setReady] = useState(false);
  const [intersection, setIntersection] = useState(false);

  return (
    <>
      <Overlay ready={ready} setReady={setReady} intersection={intersection} />
      <KeyboardControls map={map}>
        <Canvas orthographic camera={{ zoom: 25, position: [0, 0, 100] }}>
          <color attach="background" args={["#1c96c5"]} />
          <Physics gravity={[0, 0, 0]}>
            <Experience
              ready={ready}
              setReady={setReady}
              intersection={intersection}
              setIntersection={setIntersection}
            />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
