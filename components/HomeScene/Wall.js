export default function Wall() {
  return (
    <mesh position={[0, 0, -0.5]} receiveShadow>
      <boxGeometry args={[60, 30, 1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}
