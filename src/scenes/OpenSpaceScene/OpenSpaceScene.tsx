import { Environment } from '@react-three/drei'
import Lights from '../../components/Lights/Lights'
import { Physics, vec3 } from '@react-three/rapier'
import Map from '../../components/Map/Map'
import { RoughPlane } from '../../components/RoughPlane/RoughPlane'
import Players, { createPlayer } from '../../entities/Players/Players'
import { useEffect, useLayoutEffect } from 'react'
import Systems from '../../systems/systems'

export default function OpenSpaceScene() {
  useLayoutEffect(() => {
    createPlayer({ id: 'myId', position: [0, 1, 0] })
  }, [])
  return (
    <>
      <Environment background files='/assets/AmbienceExposure4k.hdr' />

      <Lights />

      <Physics timeStep='vary' debug={true}>
        <Players />
        <Systems />
        <Map />
        <RoughPlane />
      </Physics>
    </>
  )
}
