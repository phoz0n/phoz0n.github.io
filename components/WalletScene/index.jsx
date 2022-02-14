import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Card from './card'

export default function WalletScene() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 40, near: 0.0001, far: 10 }}>
      <ambientLight intensity={1} />
      <Card />
      <OrbitControls />
    </Canvas>
  )
}
