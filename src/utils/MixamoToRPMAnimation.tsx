import { AnimationClip } from 'three'

export default function MixamoToRPMAnimation(mixamoAnim: AnimationClip, animName: string, replacementKey = 'mixamorig') {
  const newAnim = mixamoAnim.clone()
  newAnim.name = animName
  newAnim.tracks = newAnim.tracks
    // removes Mixamo from track name to match RPM models
    .map(track => {
      track.name = track.name.replace(replacementKey, '')
      return track
    })
    // removes unused tracks and Hips
    .filter(track => RPMAnimationNames.includes(track.name) && !track.name.includes('Hips'))

  return newAnim
}
export const RPMAnimationNames = [
  'Hips.position',
  'Hips.quaternion',
  'LeftUpLeg.quaternion',
  'LeftLeg.quaternion',
  'LeftFoot.quaternion',
  'LeftToeBase.quaternion',
  'RightUpLeg.quaternion',
  'RightLeg.quaternion',
  'RightFoot.quaternion',
  'RightToeBase.quaternion',
  'Spine.quaternion',
  'Spine1.quaternion',
  'Spine2.quaternion',
  'LeftShoulder.quaternion',
  'LeftArm.quaternion',
  'LeftForeArm.quaternion',
  'LeftHand.quaternion',
  'LeftHandIndex1.quaternion',
  'LeftHandIndex2.quaternion',
  'LeftHandIndex3.quaternion',
  'LeftHandMiddle1.quaternion',
  'LeftHandMiddle2.quaternion',
  'LeftHandMiddle3.quaternion',
  'LeftHandPinky1.quaternion',
  'LeftHandPinky2.quaternion',
  'LeftHandPinky3.quaternion',
  'LeftHandRing1.quaternion',
  'LeftHandRing2.quaternion',
  'LeftHandRing3.quaternion',
  'LeftHandThumb1.quaternion',
  'LeftHandThumb2.quaternion',
  'LeftHandThumb3.quaternion',
  'Neck.quaternion',
  'Head.quaternion',
  'RightShoulder.quaternion',
  'RightArm.quaternion',
  'RightForeArm.quaternion',
  'RightHand.quaternion',
  'RightHandIndex1.quaternion',
  'RightHandIndex2.quaternion',
  'RightHandIndex3.quaternion',
  'RightHandMiddle1.quaternion',
  'RightHandMiddle2.quaternion',
  'RightHandMiddle3.quaternion',
  'RightHandPinky1.quaternion',
  'RightHandPinky2.quaternion',
  'RightHandPinky3.quaternion',
  'RightHandRing1.quaternion',
  'RightHandRing2.quaternion',
  'RightHandRing3.quaternion',
  'RightHandThumb1.quaternion',
  'RightHandThumb2.quaternion',
  'RightHandThumb3.quaternion',
]
