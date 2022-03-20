import React, { useRef, useState } from 'react'
import './App.css';
import { Canvas, useFrame } from 'react-three-fiber';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Bounds, ContactShadows, MeshDistortMaterial, useFBX, OrbitControls } from '@react-three/drei'
import { useIntersect, ScrollControls, Scroll } from '@react-three/drei'
import { Animator, ScrollContainer, ScrollPage, Sticky, Zoom,Fade, MoveOut, FadeIn } from 'react-scroll-motion'
import useScrollSnap from 'react-use-scroll-snap';
import { useSpring, animated } from 'react-spring';



import Model from './Scene.js'
import { Html } from '@react-three/drei'

import { TopSection } from "./TopSection"

const Paragraph = styled.div`
    color:grey;
    font-weight: 300;
    margin-top:1em;
`

const ParagraphText = styled.div`
    color:grey;
    font-weight: 250;
    // margin-top:1em;
`


const CanvasContainer = styled.div`
width:100%;
height:100%;
`

const Slogan = styled.div`
    margin: 0;
    color: white;
    font-weight: 700;
    font-size:30px;
    margin-bottom:1em;
`;



function Object3d() {

const ref = useRef();
useFrame(() => ref.current.rotation.y += 0.002)

let fbx = useFBX('/source/low-poly-mill.fbx')
// wrap fbx in primitive.
return(
<mesh scale={0.30} ref={ref}>
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

                  <hemisphereLight color="white" groundColor="#ff0f10" position={[-10, 40, 30]} intensity={0.3} />
                  <Suspense fallback={null}>
                    <Bounds fit clip margin={1.2}>
                      <Object3d position={[10, 0, -10]} />
                      
                      <OrbitControls  enableZoom={false} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
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

            <Animator animation={FadeIn()} color='white'>

              <div id="second-title">

                  
              <Slogan> AboutMe() </Slogan>

              </div>

              <div className="container">
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

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

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      Springy cards from{' '}
      <a target="_blank" href="https://bit.ly/382KSdo">
        divjoy.com
      </a>
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}

const cards = [
  {
    title: 'Build faster ⚡️',
    description:
      'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
    imageRatio: 784 / 1016
  },
  {
    title: 'Tweak anything 👩‍🎨',
    description:
      'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
    imageRatio: 839 / 1133
  },
  {
    title: 'Export your code 🚀',
    description:
      "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
    image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
    imageRatio: 730 / 1030
  }
];

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 5, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 4) / dampen, // rotateX
          (x - ref.current.clientWidth / 5) / dampen, // rotateY
          0.8 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}
