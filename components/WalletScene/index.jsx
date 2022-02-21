import { motion } from 'framer-motion-3d'
import { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Card from './Card'
import CardHolderSlider from './CardHolderSlider'

export default function WalletScene() {
  console.log('ok')
  return (
    <Canvas camera={{ position: [0, 0, 0.5], fov: 40, near: 0.0001, far: 10 }}>
      <Suspense fallback={null}>
        {process.env.NODE_ENV === 'development' && (
          <motion.primitive object={new THREE.AxesHelper(10)} />
        )}
        <motion.ambientLight intensity={0.5} />
        <motion.pointLight position={[2, 2, 2]} intensity={2} />
        <motion.pointLight position={[2, 2, -2]} intensity={2} />
        <Card
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          onPointerOver={(e) => {
            e.stopPropagation()
            console.log('ok 1')
          }}
          transition={{ duration: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: -Math.PI * 2 + 0.5 }}
        />
        <CardHolderSlider
          rotation={[Math.PI / 2, 0, 0]}
          transition={{ duration: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: -Math.PI * 2 + 0.5 }}
        />
      </Suspense>
    </Canvas>
  )
}
