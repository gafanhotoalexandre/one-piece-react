import { createContext, useState, ReactNode } from 'react'

interface CharacterContextData {
  isSelected: number | null
  selectCharacter: (index: number) => void
}

export const CharacterContext = createContext<CharacterContextData | undefined>(
  undefined,
)
interface CharacterProviderProps {
  children: ReactNode
}
export function CharacterProvider({ children }: CharacterProviderProps) {
  const [isSelected, setIsSelected] = useState<number | null>(2)

  function selectCharacter(index: number) {
    setIsSelected(index)
  }

  return (
    <CharacterContext.Provider value={{ isSelected, selectCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}
