import React from 'react'
import { BodyElementProps } from '@/components/content/paginated_list/types'

export const BodyElement = ({
  item,
  columns,
  checkboxVisible,
  selected,
  color,
  onChange,
}: BodyElementProps) => {
  return (
    <tr className="bg-white border-2 border-gray-100">
      {checkboxVisible ? (
        <td className="p-3 mb-10 w-5">
          <input
            style={{ background: color }}
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            checked={selected?.includes(item?.id)}
            onChange={() => onChange(item?.id)}
          />
        </td>
      ) : null}
      {columns.map((colEl) => (
        <td key={colEl.id} className=" p-3 mb-10">
          {colEl.value(item)}
        </td>
      ))}
    </tr>
  )
}
