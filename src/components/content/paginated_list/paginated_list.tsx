import React, { useEffect, useState } from 'react'

import { HeadElement } from './components/head-element'
import { BodyElement } from '@/components/content/paginated_list/components/body-element'
import { ListColumn, ListData } from '@/components/content/paginated_list/types'

export const ListGrid = ({
  data,
  columns,
  pagination,
  color,
  total,
  checboxVisible,
  defaultSelected,
}: any) => {
  //TODO: add and improve pagination

  const [pages, setPages] = useState(
    pagination
      ? Array.from(
          Array(Math.round(total / pagination.elementsByPage)),
          (_, x) => x + 1
        )
      : null
  )

  const [selected, setSelected] = useState(defaultSelected)

  useEffect(() => {
    if (total) {
      setPages(
        Array.from(
          Array(Math.round(total / pagination.elementsByPage)),
          (_, x) => x + 1
        )
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return (
    <div className="w-full flex justify-center flex-col space-y-3">
      <div className="w-full flex-col flex items-center">
        <table className="w-full space-y-4 ">
          <thead>
            <tr>
              {checboxVisible ? (
                <th className="w-5 bg-gray-100">
                  <input
                    style={{ background: color }}
                    checked={selected.length === total}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    type="checkbox"
                    onChange={() =>
                      selected.length === total
                        ? setSelected([])
                        : setSelected(data.map((el: ListData) => el?.id))
                    }
                  />
                </th>
              ) : null}
              {columns.map((el: ListColumn, index: number) => (
                <HeadElement key={index} item={el} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((el: ListData) => (
              <BodyElement
                key={el?.id}
                checkboxVisible={checboxVisible}
                selected={selected}
                color={color}
                onChange={(id: string) => {
                  return !selected.includes(id)
                    ? setSelected([...selected, id])
                    : setSelected(selected.filter((el: string) => el !== id))
                }}
                item={el}
                columns={columns}
              />
            ))}
          </tbody>
        </table>
        {/* <ListPagination
          pagination={pagination}
          elementsByPage={pagination?.elementsByPage}
          total={total}
          onPagination={(el) => onPagination({ ...pagination, page: el })}
          previousPage={() =>
            onPagination({
              page: pagination.page - 1,
              elementsByPage: pagination.elementsByPage,
              optionsByPage: pagination.optionsByPage,
            })
          }
          pages={pages}
          nextPage={() =>
            onPagination({
              page: pagination.page + 1,
              elementsByPage: pagination.elementsByPage,
              optionsByPage: pagination.optionsByPage,
            })
          }
          onChange={(e) =>
            onPagination({
              ...pagination,
              elementsByPage: parseInt(e.target.value),
            })
          }
        />*/}
      </div>
    </div>
  )
}
