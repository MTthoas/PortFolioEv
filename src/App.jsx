import React, { useRef } from 'react'
import './App.css';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import { useGLTF } from '@react-three/drei'
import { Suspense } from 'react';
import { AmbientLight } from 'three';
import { PerspectiveCamera, sphereBufferGeometry, MeshWobbleMaterial, MeshDistortMaterial, ueFBX, OrbitControls  } from '@react-three/drei'

import Model from './Scene.js'
import { PresentationControls } from '@react-three/drei'

const CanvasContainer = styled.div`
  width:100%;
  height:100%;
`

function Box(){
  return(
    <mesh>
      <sphereBufferGeometry attach="geometry" />
      <MeshDistortMaterial
    attach="material"
    distort={0.8} // Strength, 0 disables the effect (default=1)
    speed={1} // Speed (default=1)
    color = "#282c34"
  />
      {/* <meshLambertMaterial attach="material" color="hotpink" /> */}
    </mesh>
  )
}


function App() {
  
  return (
    <CanvasContainer>
    <Canvas width="100%" height="100%">
       <ambientLight intensity={1} />
      <Suspense fallback={null} >
        <Box  position={[10, 0, -10]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
    </CanvasContainer>
  );
}

export default App;
