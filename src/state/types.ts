import { ReactNode } from 'react'
import { Object3D } from 'three'

export type RenderableEntity = {
  three?: Object3D
  render?: ReactNode
}

export type PlayerEntity = RenderableEntity & {
  id?: string
  isPlayer?: boolean
  initialPosition?: [x: number, y: number, z: number]
  characterUrl?: string
}

export type Entity = PlayerEntity
