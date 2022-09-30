import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import LunarDayMap from '../../assets/textures/lroc_color_poles_2k.jpg';
import LunarNormalMap from '../../assets/textures/ldem_4_uint.jpg';

export function Earth(props) {
  const [coloMap, normalMap] = useLoader(TextureLoader, [
    LunarDayMap,
    LunarNormalMap,
  ]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
        <meshStandardMaterial colorMap={coloMap} />
      </mesh>
    </>
  );
}
