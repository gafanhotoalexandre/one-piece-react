import { useContext } from 'react'

import { CharacterContext } from '../context/CharacterContext'

export function useCharacterContext() {
  const context = useContext(CharacterContext)

  if (!context) {
    throw new Error(
      'useCharacterContext deve ser usado dentro de um CharacterProvider',
    )
  }
  return context
}
