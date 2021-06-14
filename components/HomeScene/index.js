import { Canvas } from '@react-three/fiber'
import Arch from './Arch'

import Door from './Door'
import Floor from './Floor'
import MainLight from './MainLight'
import Wall from './Wall'

export default function HomeScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 20], fov: 50 }}>
      <MainLight />
      <Wall />

      <Door position={[3, 5]} />
      <Door position={[9, 0]} />
      <Door position={[0, 0]} />
      <Door position={[-10, 5]} />
      <Door position={[-8, -5]} />

      <Floor y={8.25} />
      <Floor y={3.25} />
      <Floor y={-1.75} />
      <Floor y={-6.75} />

      <Arch position={[-18, 0.75]} />
      <Arch position={[-3, 0.75]} />
      <Arch position={[12, 0.75]} />
      <Arch position={[-18, 5.75]} />
      <Arch position={[-3, 5.75]} />
      <Arch position={[12, 5.75]} />
      <Arch position={[-18, -4.25]} />
      <Arch position={[-3, -4.25]} />
      <Arch position={[12, -4.25]} />
    </Canvas>
  )
}
