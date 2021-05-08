import * as three from "three";
import React, { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Text } from "troika-three-text";

extend({ Text });

const textCommonProps = {
  font: "Roboto",
  fontSize: 30,
  color: "#ddd",
  maxWidth: 300,
  lineHeight: 1,
  letterSpacing: 0,
  textAlign: "justify",
  anchorX: "center",
  anchorY: "middle",
};

function Phrase({ content, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const [hovered, setHover] = useState(false);

  return (
    <>
      <text
        {...textCommonProps}
        text={content}
        rotation-x={rotation[0]}
        rotation-y={rotation[1]}
        rotation-z={rotation[2]}
        position-x={position[0]}
        position-y={position[1]}
        position-z={position[2]}
        font="https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <meshBasicMaterial
          attach="material"
          color={hovered ? "red" : "black"}
          side={three.DoubleSide}
        />
      </text>
    </>
  );
}

function Scene() {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(() => setRotation(([x, y, z]) => [x, y - 0.01, z]));

  return (
    <group rotation={rotation} position={[0, -40, -300]}>
      <Phrase content="Bonjour" position={[0, 0, 150]} rotation={[0, 0, 0]} />
      <Phrase
        content="Bienvenue"
        position={[150, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Phrase
        content="Hello"
        position={[0, 0, -150]}
        rotation={[0, -Math.PI, 0]}
      />
      <Phrase
        content="Welcome"
        position={[-150, 0, 0]}
        rotation={[0, Math.PI / -2, 0]}
      />
    </group>
  );
}

export default function CanvasComponent() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Canvas>
        {/* <ambientLight /> */}
        <Scene />
        {/* <pointLight position={[10, 10, 10]} /> */}
      </Canvas>
    </div>
  );
}
