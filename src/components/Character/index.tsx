interface CharacterProps {
  name: string
  imageSrc: string
  alt: string
  description: string
  selected: boolean
}

export function Character({
  name,
  imageSrc,
  alt,
  description,
  selected,
}: CharacterProps) {
  return (
    <article className={`${selected ? 'selected' : 'hidden'}`}>
      <img src={imageSrc} alt={alt} />

      <section>
        <i></i>
        <h2>{name}</h2>

        <p>{description}</p>
      </section>
    </article>
  )
}
