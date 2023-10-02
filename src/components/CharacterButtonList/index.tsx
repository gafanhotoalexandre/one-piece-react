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
    <ul className="fixed right-0 -top-[5%] sm:top-0 bg-buttons flex flex-row items-end w-full gap-4 p-5 sm:p-7 md:p-0 md:flex-col justify-center md:items-center min-h-screen md:w-44 md:gap-3 z-10">
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
