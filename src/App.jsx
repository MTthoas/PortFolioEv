import React, { useRef } from 'react'
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Bounds, ContactShadows, MeshDistortMaterial, useFBX, domContent } from '@react-three/drei'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import { Animator, ScrollContainer, ScrollPage, Sticky, Zoom,Fade, MoveOut } from 'react-scroll-motion'

import Model from './Scene.js'
import { Html } from '@react-three/drei'

import { TopSection } from "./TopSection"

const CanvasContainer = styled.div`
width:100%;
height:100%;
`

function Object3d() {

const ref = useRef();
useFrame(() => ref.current.rotation.y += 0.002)

let fbx = useFBX('/source/low-poly-mill.fbx')
// wrap fbx in primitive.
return(
<mesh ref={ref}>
  <primitive object={fbx} dispose={null} />
</mesh>
)

}



function App({children}) {

const domContent = useRef();

return (

<div className="App">

  <ScrollContainer>


    <ScrollPage page={0}>

      <div className="First">

        <Animator animation={(Sticky(), Fade(), MoveOut(0,-200))}>

          <CanvasContainer>
            <TopSection />

            <Canvas camera={{ position: [-40, 40, 70], fov: 50 }} dpr={[1, 2]}>

              <hemisphereLight color="white" groundColor="#ff0f00" position={[-10, 40, 25]} intensity={0.7} />
              <Suspense fallback={null}>
                <Bounds fit clip margin={1.2}>
                  <Object3d position={[10, 0, -10]} />
                  {/*
                  <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} /> */}
                </Bounds>

                <ContactShadows rotation-x={Math.PI / 2} position={[0, -35, 0]} opacity={0.2} width={200} height={200}
                  blur={1} far={50} />
              </Suspense>

            </Canvas>
          </CanvasContainer>

        </Animator>

      </div>

    </ScrollPage>


    <ScrollPage page={1}>


      <div className="second">

        <Animator animation={Zoom()}>

          <p>  </p>

        </Animator>

      </div>
    </ScrollPage>



  </ScrollContainer>
</div>

);
}

export default App;