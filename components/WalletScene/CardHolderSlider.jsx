import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CardHolderSlider(props) {
  const [hover, set] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  const group = useRef()
  const { nodes, materials } = useGLTF('/card-holder-slider.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Holder.geometry}
        material={materials.Metallic}
        onPointerOver={(e) => e.stopPropagation()}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Slider.geometry}
          material={materials.BlackPlastic}
          position={[-0.1, 0, -0.03]}
          onPointerOver={(e) => {
            e.stopPropagation()
            set(true)
          }}
          onPointerLeave={() => {
            set(false)
          }}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/card-holder-slider.glb')
