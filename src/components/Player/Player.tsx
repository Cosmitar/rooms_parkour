import { KeyboardControls } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { ReactNode, Suspense, forwardRef } from 'react'
import { Group } from 'three'
import { ECS } from '../../state/ECS'
import { AnimationLocalPlayer } from '../AnimationLocalPlayer/AnimationLocalPlayer'
import Ecctrl from '../../utils/Ecctrl/Ecctrl'

/**
 * Keyboard control preset
 */
const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
  { name: 'action1', keys: ['1'] },
  { name: 'action2', keys: ['2'] },
  { name: 'action3', keys: ['3'] },
  { name: 'action4', keys: ['KeyF'] },
  { name: 'die', keys: ['KeyX'] },
]

export default forwardRef<Group & { children: ReactNode }, GroupProps>(function Player({ children }, outterRef) {
  const entity = ECS.useCurrentEntity()
  return (
    <group ref={outterRef}>
      <Suspense fallback={null}>
        <KeyboardControls map={keyboardMap}>
          <Ecctrl debug={false} animated={true} camInitDis={-10} followLight position={entity.initialPosition}>
            <AnimationLocalPlayer key={entity.characterUrl}>{children}</AnimationLocalPlayer>
          </Ecctrl>
        </KeyboardControls>
      </Suspense>
    </group>
  )
})
