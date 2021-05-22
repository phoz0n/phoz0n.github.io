import * as three from "three";
import React, { useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Text } from "troika-three-text";

extend({ Text });

const textCommonProps = {
  font: "Roboto",
  fontSize: 30,
  color: "#0F0",
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

function Texts() {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(() => setRotation(([x, y, z]) => [x, y - 0.02, z]));

  return (
    <group rotation={rotation} position={[0, -40, -300]}>
      <Phrase content="WIP" position={[0, 0, 150]} rotation={[0, 0, 0]} />
      <Phrase
        content="Not yet"
        position={[150, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Phrase
        content="Brb later"
        position={[0, 0, -150]}
        rotation={[0, -Math.PI, 0]}
      />
      <Phrase
        content="On it"
        position={[-150, 0, 0]}
        rotation={[0, Math.PI / -2, 0]}
      />
    </group>
  );
}

export default function CanvasComponent() {
  return (
    <Canvas>
      <ambientLight />
      <Texts />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <mesh position={[0.4, 0.2, 0.9]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.4, 0.2, 0.9]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0, -0.2, 1]}>
        <boxGeometry args={[1, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}
