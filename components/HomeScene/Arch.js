export default function Arch({ position }) {
  const [x, y] = position
  return (
    <group>
      <mesh castShadow receiveShadow position={[x, y, 0.3]}>
        <boxGeometry args={[0.8, 4.5, 0.6]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh castShadow receiveShadow position={[x, y + 1.75, 0.6]}>
        <boxGeometry args={[4, 1, 1.2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  )
}
