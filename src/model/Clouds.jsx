import { Cloud } from "@react-three/drei";

const Clouds = () => {
  return (
    <>
      <Cloud volume={5} position={[25, 11, -10]} />
      <Cloud volume={4} position={[-2, 4, -10]} />
      <Cloud volume={5} position={[-23, 9, -10]} />
      <Cloud volume={6} position={[20, -4, -10]} />
      <Cloud volume={5} position={[5, -8.5, -10]} />
      <Cloud volume={5} position={[-18, -10, -10]} />
    </>
  );
};

export default Clouds;
