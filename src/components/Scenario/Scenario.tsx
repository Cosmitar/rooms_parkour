import { FloorProtoModel } from '../../models/FloorProto/FloorProto'

export default function Scenario() {
  return (
    <>
      <FloorProtoModel position={[1, 0.75, 14]} />
      <FloorProtoModel position={[7, 1, 14]} rotation={[-Math.PI/8, 0, 0]}/>
      <FloorProtoModel position={[1, 0.15, 7]} rotation={[-Math.PI/4, 0, 0]} />
    </>
  )
}
