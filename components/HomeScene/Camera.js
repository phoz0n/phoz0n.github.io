import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export default function Camera(props) {
  const ref = useRef()
  const set = useThree((state) => state.set)
  // Make the camera known to the system
  useEffect(() => void set({ camera: ref.current }), [])
  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld())

  const [ok, setOK] = useState(0)
  useEffect(() => {
    if (ok < 5) setOK((ok) => ok + 1)
  }, [ok])

  return <perspectiveCamera ref={ref} {...props} />
}
