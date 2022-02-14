import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Card(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/card.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.0865, 0.00068, 0.05398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.front}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.side} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.back} />
      </group>
    </group>
  )
}

useGLTF.preload('/card.glb')
