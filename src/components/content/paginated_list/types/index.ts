export type ListData = {
  id: number
}

export type ListColumn = {
  id: string
  header: string
  value: any
}

export type BodyElementProps = {
  item: any
  columns: ListColumn[]
  checkboxVisible: boolean
  selected: [boolean]
  color?: string
  onChange: Function
}
