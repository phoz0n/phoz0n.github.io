import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Card(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/card.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Card_1.geometry} material={materials.front} />
      <mesh castShadow receiveShadow geometry={nodes.Card_2.geometry} material={materials.side} />
      <mesh castShadow receiveShadow geometry={nodes.Card_3.geometry} material={materials.back} />
    </group>
  )
}

useGLTF.preload('/card.glb')
