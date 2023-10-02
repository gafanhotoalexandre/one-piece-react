import { useCharacterContext } from '../../hooks/useCharacterContext'
import { buttonsData } from '../../utils/buttonsData'
import { CharacterButton } from '../Button'

// interface CharacterButtonListProps {
//   isSelected: number | null
//   selectedClassHandle: (index: number) => void
// }

export function CharacterButtonList() {
  const { isSelected, selectCharacter } = useCharacterContext()
  return (
    <ul>
      {buttonsData.map((button, index) => (
        <CharacterButton
          key={index}
          selected={isSelected === index}
          {...button}
          onClick={() => selectCharacter(index)}
        />
      ))}
    </ul>
  )
}
