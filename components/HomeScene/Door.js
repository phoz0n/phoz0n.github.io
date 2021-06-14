import { useState } from 'react'

export default function Door({ position }) {
  const [x, y] = position
  const [isHover, setIsHover] = useState(false)
  return (
    <group
      position={[x, y, 0]}
      onPointerOver={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
      onClick={() => alert('Its not here :)')}>
      <mesh castShadow receiveShadow position={[-1.5, 0, 0.2]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh castShadow receiveShadow position={[1.5, 0, 0.2]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 1.5, 0.2]}>
        <boxGeometry args={[3.4, 0.4, 0.4]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.1, 0.05]}>
        <boxGeometry args={[2.8, 2.8, 0.1]} />
        <meshStandardMaterial color={isHover ? 'red' : 'brown'} />
      </mesh>
    </group>
  )
}
