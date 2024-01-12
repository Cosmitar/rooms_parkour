import { ECS } from './ECS'

// PLAYER
export const RenderablePlayersQuery = ECS.world.with('isPlayer', 'render')
export const RenderedPlayersQuery = RenderablePlayersQuery.with('three')
