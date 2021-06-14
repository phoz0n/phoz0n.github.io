import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { softShadows } from '@react-three/drei'

softShadows({
  frustum: 3.75,
  size: 0.1,
  near: 9.5,
  samples: 32,
  rings: 11, // Rings (default: 11) must be a int
})

export default function MainLight() {
  const [pos, setPos] = useState([0, 0, 0])
  const [lightPos, setLightPos] = useState([0, -3, 10])
  const target = useRef()

  useFrame(({ mouse }) => {
    setPos([mouse.x * 5, 0, -10])
    setLightPos([mouse.x * 5, mouse.y * 5, 10])
  })

  return (
    <spotLight
      castShadow
      color="white"
      intensity={1}
      distance={50}
      penumbra={1}
      position={lightPos}
      target={target.current}
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
      angle={Math.PI / 3}>
      <mesh ref={target} position={pos} />
    </spotLight>
  )
}
