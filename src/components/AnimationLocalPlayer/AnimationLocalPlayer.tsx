/**
 * This file is inspired on EcctrlAnimation with custom code to handle animations from different glb sources.
 * Additionally, stores current animation into PLayroom player state
 */

import { MutableRefObject, ReactNode, useEffect, useRef } from 'react'
import { animationSet, useRPMAnimations } from '../../utils/hooks/useRPMAnimations'
import * as THREE from 'three'
import { useGame } from '../../utils/Ecctrl/Ecctrl'

export function AnimationLocalPlayer({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>() as MutableRefObject<THREE.Group>

  const actions = useRPMAnimations(group)

  return (
    <group ref={group} dispose={null} userData={{ camExcludeCollision: true }}>
      <Animator
        //player={player}
        actions={actions as unknown as keyof typeof animationSet}
      />
      {/* Replace character model here */}
      {children}
    </group>
  )
}

export const Animator = ({ actions }: { /*player, */ actions: keyof typeof animationSet }) => {
  /**
   * Character animations setup
   */
  const curAnimation = useGame((state: any) => state.curAnimation)
  const resetAnimation = useGame((state: any) => state.reset)
  const initializeAnimationSet = useGame((state: any) => state.initializeAnimationSet)

  useEffect(() => {
    // Initialize animation set
    initializeAnimationSet(animationSet)
  }, [])

  // useEffect(() => {
  //   player.setState('curAnimation', curAnimation)
  // }, [curAnimation])

  useEffect(() => {
    // Play animation
    const action = actions[curAnimation ? curAnimation : animationSet.idle] as unknown as THREE.AnimationAction & {
      _mixer: THREE.AnimationMixer & { _listeners: any[] }
    }

    // For jump and jump land animation, only play once and clamp when finish
    if (
      curAnimation === animationSet.jump ||
      curAnimation === animationSet.jumpLand ||
      curAnimation === animationSet.action1 ||
      curAnimation === animationSet.action2 ||
      curAnimation === animationSet.action3 ||
      curAnimation === animationSet.action4
    ) {
      action && action.reset().fadeIn(0.23).setLoop(THREE.LoopOnce, 0).play()
      action && (action.clampWhenFinished = true)
    } else {
      action && action.reset().fadeIn(0.23).play()
    }

    // When any action is clamp and finished reset animation
    action && action._mixer.addEventListener('finished', () => resetAnimation())

    return () => {
      if (action) {
        // Fade out previous action
        action.fadeOut(0.3)

        // Clean up mixer listener, and empty the _listeners array
        action._mixer.removeEventListener('finished', () => resetAnimation())
        action._mixer._listeners = []
      }
    }
  }, [curAnimation, actions])

  return <></>
}
