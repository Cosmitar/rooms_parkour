import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { MutableRefObject, useRef } from 'react'

export default function Map({ onMapReady = () => {} }: { onMapReady?: () => void }) {
  const floorRef = useRef<any>() as MutableRefObject<any>
  const flag = useRef(false)

  useFrame(() => {
    if (!flag.current && floorRef.current) {
      // just a delay in an attempt to let physics to create the floor before create the players,
      // especially in low performance devices the player falls off the world
      setTimeout(onMapReady, 3000)
      flag.current = false
    }
  })

  return (
    <RigidBody type='fixed' ref={floorRef}>
      <mesh receiveShadow position={[0, -3.5, 0]}>
        <cylinderGeometry args={[150, 150, 5, 50]} />
        <shadowMaterial color='#333' transparent opacity={0.5} />
        <meshStandardMaterial color='lightblue' transparent opacity={0.5} />
      </mesh>
    </RigidBody>
  )
}
