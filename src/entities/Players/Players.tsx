import { ECS } from '../../state/ECS'
import { RenderablePlayersQuery } from '../../state/queries'
import renderEntity from '../../utils/renderEntity'
import CharacterModel from '../../models/CharacterModel/CharacterModel'
import Player from '../../components/Player/Player'

export default function Players() {
  return <ECS.Entities in={RenderablePlayersQuery} children={renderEntity} />
}

export const createPlayer = ({
  id,
  position,
  characterUrl,
}: {
  id: string
  position: [x: number, y: number, z: number]
  characterUrl?: string
}) => {
  return ECS.world.add({
    id,
    isPlayer: true,
    initialPosition: position,
    characterUrl,
    render: (
      <Player>
        <CharacterModel position={position} characterUrl={characterUrl} />
      </Player>
    ),
  })
}
