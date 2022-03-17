import React, { useRef } from 'react'
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Bounds, ContactShadows, MeshDistortMaterial, useFBX, domContent } from '@react-three/drei'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import { Animator, ScrollContainer, ScrollPage, Sticky, Zoom,Fade, MoveOut } from 'react-scroll-motion'
import useScrollSnap from 'react-use-scroll-snap';


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
<mesh scale={0.24} ref={ref}>
  <primitive object={fbx} dispose={null} />
</mesh>
)

}


function App({children}) {

const scrollRef = useRef(null);
useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

return (

<>

  {/* <section id="GlobalApp"> */}

  <ScrollContainer>

    <section id="App" ref={scrollRef}>

        <ScrollPage page={0}>

          <div className="First">

            <Animator animation={(Sticky(), Fade(), MoveOut(0,-200))}>

              <CanvasContainer>
                <TopSection />
                

                <Canvas id="canvas1" camera={{ position: [-40, 40, 70], fov: 50 }} dpr={[1, 2]}>

                  <hemisphereLight color="white" groundColor="#ff0f00" position={[-10, 40, 25]} intensity={0.7} />
                  <Suspense fallback={null}>
                    <Bounds fit clip margin={1.2}>
                      <Object3d position={[10, 0, -10]} />
                      {/*
                      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} /> */}
                    </Bounds>

                  </Suspense>

                </Canvas>
              </CanvasContainer>

            </Animator>

    

          </div>

        </ScrollPage>

      </section>

      <section id="App2"> 

        <ScrollPage page={1}>

          <div className="second">

            <Animator animation={Zoom()}>

              <p> Coucou </p>

            </Animator>

          </div>

        </ScrollPage>

        </section>        

      </ScrollContainer>




    {/* <section id="App2">

      <div className="second">

        <p> Coucou </p>

      </div>

    </section> */}
    {/*
  </section> */}

</>

);
}

export default App;