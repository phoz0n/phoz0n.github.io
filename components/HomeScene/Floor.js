export default function Floor({ y }) {
  return (
    <mesh castShadow receiveShadow position={[0, y, 2]}>
      <boxGeometry args={[60, 0.5, 4]} />
      <meshStandardMaterial color="dark-grey" />
    </mesh>
  )
}
