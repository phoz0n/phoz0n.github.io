import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Camera() {
  const { camera } = useThree()
  const isDesktop = useMediaQuery({ minWidth: 992 })

  useEffect(() => {
    camera.zoom = isDesktop ? 3 : 2
  }, [isDesktop])

  return null
}
