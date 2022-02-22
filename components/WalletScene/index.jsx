import { motion } from 'framer-motion-3d'
import { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Poop from './Poop'
import Poop2 from './Poop2'
import { OrbitControls } from '@react-three/drei'

export default function WalletScene() {
  return (
    <Canvas camera={{ position: [0, 0, 0.5], fov: 40, near: 0.1, far: 10 }}>
      <OrbitControls />
      <Suspense fallback={null}>
        {process.env.NODE_ENV === 'development' && (
          <motion.primitive object={new THREE.AxesHelper(10)} />
        )}
        <motion.ambientLight intensity={0.5} />
        <motion.pointLight position={[2, 2, 2]} intensity={2} />
        <motion.pointLight position={[2, 2, -2]} intensity={2} />
        <Poop
          rotation={[Math.PI / 2, 0, 0]}
          transition={{ duration: 3 }}
          initial={{ scale: 0, rotateX: Math.PI * 2 + 0.2 }}
          animate={{ scale: 0.1, rotateY: Math.PI * 2 + 0.5 }}
        />

      </Suspense>
    </Canvas>
  )
}
