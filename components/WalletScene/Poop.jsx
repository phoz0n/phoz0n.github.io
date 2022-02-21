import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

export default function Poop(props) {
  const [hover, set] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  const group = useRef()
  const { nodes, materials } = useGLTF('/poop.glb')
  return (
    <motion.group ref={group} {...props} dispose={null}>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Poop.geometry}
        material={materials.Pooop}>
      </motion.mesh>
    </motion.group>
  )
}

useGLTF.preload('/poop.glb')
