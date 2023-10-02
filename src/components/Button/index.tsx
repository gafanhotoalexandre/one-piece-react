interface CharacterButtonProps {
  imageSrc: string
  altText: string
  selected: boolean
  onClick: () => void
}

export function CharacterButton({
  imageSrc,
  altText,
  selected,
  onClick,
}: CharacterButtonProps) {
  return (
    <li>
      <button
        className={`button ${selected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <img src={imageSrc} alt={altText} />
      </button>
    </li>
  )
}
