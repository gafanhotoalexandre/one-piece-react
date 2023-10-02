// components
import { Character } from '../Character'
// utils
import { charactersData } from '../../utils/charactersData'
// hooks
import { useCharacterContext } from '../../hooks/useCharacterContext'

export function CharacterList() {
  const { isSelected } = useCharacterContext()
  return (
    <>
      {charactersData.map((character, index) => (
        <Character key={index} {...character} selected={isSelected === index} />
      ))}
    </>
  )
}
