import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Model } from './Scene';
import { OrbitControls } from '@react-three/drei';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
