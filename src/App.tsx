import { Canvas } from '@react-three/fiber'
import OpenSpaceScene from './scenes/OpenSpaceScene/OpenSpaceScene'

const App = () => {
  return (
    <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
      <color attach='background' args={['#ececec']} />
      <OpenSpaceScene />
    </Canvas>
  )
}

export default App
