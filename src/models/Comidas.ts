class Comidas {
  title: string
  description: string
  image: string
  infos: string[]
  button: string
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    infos: string[],
    button: string,
    id: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.button = button
  }
}
export default Comidas
