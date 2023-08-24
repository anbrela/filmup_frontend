import React from 'react'
import { ListColumn } from '@/components/content/paginated_list/types'

type HeadElementProps = {
  item: ListColumn
}
export const HeadElement = ({ item }: HeadElementProps) => {
  return (
    <th key={item.id} className="text-left p-4 bg-primary text-white">
      {item.header}
    </th>
  )
}
