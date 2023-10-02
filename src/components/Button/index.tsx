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
        <img
          className="rounded-full max-w-[3.125rem] sm:max-w-[4rem] md:max-w-none"
          src={imageSrc}
          alt={altText}
        />
      </button>
    </li>
  )
}
