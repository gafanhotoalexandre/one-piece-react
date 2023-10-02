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
    <article className={`h-screen  ${selected ? 'selected' : 'hidden'}`}>
      <img
        className="w-full h-5/6 md:h-full object-cover"
        src={imageSrc}
        alt={alt}
      />

      <section className="text-white absolute flex flex-col -top-[20%] left-0 max-w-screen p-8 justify-end md:p-0 md:top-0 md:left-[7.5rem] md:justify-center min-h-screen md:max-w-sm z-20">
        <i className="logo mb-9"></i>
        <h2 className="font-secular-one text-2xl sm:text-4xl md:text-5xl mb-5">
          {name}
        </h2>

        <p className="font-rubik max-w-lg md:max-w-none text-base">
          {description}
        </p>
      </section>
    </article>
  )
}
