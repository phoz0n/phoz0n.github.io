import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Card from './card'

export default function WalletScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 40, near: 0.0001, far: 10 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Card
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          onPointerEnter={() => console.log('ok 1')}
        />
        <Card
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -0.02, 0.005]}
          onPointerEnter={() => console.log('ok 2')}
        />
        <Card
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -0.04, 0.01]}
          onPointerEnter={() => console.log('ok 3')}
        />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
