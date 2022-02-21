import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Card from './Card'
import Camera from './camera'
import CardHolderSlider from './CardHolderSlider'

import * as THREE from 'three'

export default function WalletScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 40, near: 0.0001, far: 10 }}>
      <Suspense fallback={null}>
        <Camera />
        <primitive object={new THREE.AxesHelper(10)} />
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} />
        <pointLight position={[2, 2, -2]} />
        <Card
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          onPointerOver={(e) => {
            e.stopPropagation()
            console.log('ok 1')
          }}
        />
        <CardHolderSlider rotation={[Math.PI / 2, 0, 0]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
