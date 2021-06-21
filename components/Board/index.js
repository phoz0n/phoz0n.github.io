import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

import CV from './cv'

export default function HomeScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
      <spotLight
        color="white"
        intensity={1}
        distance={50}
        penumbra={1}
        position={[0, -3, 10]}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        angle={Math.PI / 3}
      />

      <mesh position={[0, 0, 0.3]}>
        <boxGeometry args={[2, 1, 0.6]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position={[0, 0, 0.5]} scale={[0.1, 0.1, 0.1]}>
        <Html center style={{ width: '21mm', height: '29.7mm', overflow: 'hidden' }} transform>
          <CV />
        </Html>
      </mesh>
    </Canvas>
  )
}
