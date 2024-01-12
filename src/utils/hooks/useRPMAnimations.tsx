import { useAnimations, useGLTF } from '@react-three/drei'
import { MutableRefObject } from 'react'
import { AnimationClip } from 'three'
import MixamoToRPMAnimation from '../MixamoToRPMAnimation'

export const useRPMAnimations = (targetRef: MutableRefObject<any>) => {
  const { animations: walkAnimation } = useGLTF('/assets/animations/M_Walk_001.glb')
  const { animations: danceAnimation } = useGLTF('/assets/animations/M_Dances_001.glb')
  const { animations: danceAltAnimation } = useGLTF('/assets/animations/M_Dances_005.glb')
  const { animations: idleAltAnimation } = useGLTF('/assets/animations/M_Standing_Expressions_001.glb')
  const { animations: idleAnimation } = useGLTF('/assets/animations/M_Standing_Idle_001.glb')
  const { animations: idleAlt2Animation } = useGLTF('/assets/animations/M_Standing_Idle_002.glb')
  const { animations: jumpIdleAnimation } = useGLTF('/assets/animations/M_Jump_Idle.glb')
  const { animations: jumpAnimation } = useGLTF('/assets/animations/M_Falling_Idle_002.glb')
  const { animations: jogAnimation } = useGLTF('/assets/animations/M_Jog_001.glb')
  // const { animations: jumpMixamo } = useGLTF('/assets/animations/JumpMixamo.glb')
  // const { animations: ZombieDieMixamo } = useGLTF('/assets/animations/DramaticDyingMixamo.glb')

  const { actions } = useAnimations(
    [
      idleAnimation[0].clone(),
      idleAltAnimation[0].clone(),
      idleAlt2Animation[0].clone(),
      walkAnimation[0].clone(),
      danceAnimation[0].clone(),
      danceAltAnimation[0].clone(),
      jumpIdleAnimation[0].clone(),
      jogAnimation[0].clone(),
      jumpAnimation[0].clone(),
      // MixamoToRPMAnimation(jumpMixamo[0], 'M_Jog_Jump_001'),
      // MixamoToRPMAnimation(ZombieDieMixamo[0], 'DramaticDying', 'mixamorig1'),
    ],
    targetRef
  )

  return actions
}

useGLTF.preload('/assets/animations/M_Walk_001.glb')
useGLTF.preload('/assets/animations/M_Standing_Idle_001.glb')
useGLTF.preload('/assets/animations/M_Standing_Idle_002.glb')
useGLTF.preload('/assets/animations/M_Standing_Expressions_001.glb')
useGLTF.preload('/assets/animations/M_Dances_001.glb')
useGLTF.preload('/assets/animations/M_Dances_005.glb')
useGLTF.preload('/assets/animations/M_Jump_Idle.glb')
useGLTF.preload('/assets/animations/M_Falling_Idle_002.glb')
useGLTF.preload('/assets/animations/M_Jog_001.glb')
// useGLTF.preload('/assets/animations/JumpMixamo.glb')
// useGLTF.preload('/assets/animations/DramaticDyingMixamo.glb')

/**
 * Character animation set preset
 */
export const animationSet = {
  idle: 'M_Standing_Idle_001',
  walk: 'M_Walk_001',
  run: 'M_Jog_001',
  jump: 'CharacterArmature|Jump',
  // jumpIdle: 'M_Falling_Idle_002',
  jumpIdle: 'M_Jog_Jump_001',
  jumpLand: 'CharacterArmature|Jump_Land',
  fall: 'CharacterArmature|Duck', // This is for falling from high sky
  action1: 'M_Standing_Expressions_001',
  action2: 'M_Dances_001',
  action3: 'M_Dances_005',
  action4: 'M_Standing_Idle_002',
  // die: 'DramaticDying',
}
