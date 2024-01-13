import { Environment } from '@react-three/drei'
import Lights from '../../components/Lights/Lights'
import { Physics } from '@react-three/rapier'
import Map from '../../components/Map/Map'
import { RoughPlane } from '../../components/RoughPlane/RoughPlane'
import Players, { createPlayer } from '../../entities/Players/Players'
import { useLayoutEffect } from 'react'
import Systems from '../../systems/Systems'
import Scenario from '../../components/Scenario/Scenario'
import { FloorProtoInstances } from '../../models/FloorProto/FloorProto'
import Monitor from '../../utils/Monitor/Monitor'

export default function OpenSpaceScene() {
  useLayoutEffect(() => {
    createPlayer({ id: 'myId', position: [0, 1, 0] })
  }, [])
  return (
    <>
      <Environment background files='/assets/AmbienceExposure4k.hdr' />

      <Lights />

      <Monitor />

      <Physics timeStep='vary' debug={true}>
        <Players />
        <Systems />
        <Map />
        <FloorProtoInstances receiveShadow castShadow>
          <Scenario />
        </FloorProtoInstances>
        {/* <RoughPlane /> */}
      </Physics>
    </>
  )
}
