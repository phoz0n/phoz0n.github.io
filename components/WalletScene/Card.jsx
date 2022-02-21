import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

export default function Card(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/card.glb')
  return (
    <motion.group ref={group} {...props} dispose={null}>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_1.geometry}
        material={materials.front}
      />
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_2.geometry}
        material={materials.side}
      />
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_3.geometry}
        material={materials.back}
      />
    </motion.group>
  )
}

useGLTF.preload('/card.glb')
