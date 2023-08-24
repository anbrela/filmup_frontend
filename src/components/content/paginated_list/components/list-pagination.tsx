import * as PropTypes from 'prop-types'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const ListPagination = (props: any) => {
  return (
    <>
      {props.pagination ? (
        <div className="flex  mt-1 w-full bg-gray-100 h-10 px-5">
          <div className="flex w-full h-full items-center justify-between">
            <p className="text-xs">
              Mostrando{' '}
              <span className="font-bold">
                {props.pagination.elementsByPage}
              </span>{' '}
              de <span className="font-bold">{props.total}</span>
            </p>
            <div className="flex space-x-2 items-center ">
              <ArrowLeftIcon
                className="cursor-pointer w-6 h-6"
                onClick={() =>
                  props.pagination.page > 1 ? props.previousPage() : null
                }
              />
              <div className="flex space-x-2">
                {props.pages?.map((el: any) => (
                  <div
                    onClick={() => props.onPagination(el)}
                    key={el}
                    className={`cursor-pointer flex items-center justify-center w-6 font-bold h-6 rounded-full ${
                      props.pagination.page === el && 'bg-white'
                    }`}
                  >
                    {el}
                  </div>
                ))}
              </div>
              <ArrowRightIcon
                className="cursor-pointer w-6 h-6"
                onClick={() =>
                  props.pages.length > 1 &&
                  props.pagination.page < props.pages.length
                    ? props.nextPage()
                    : null
                }
              />
            </div>
            <div>
              <p className="text-xs">
                Por página:{' '}
                <span className="font-bold">
                  {' '}
                  <select
                    value={props.pagination.optionsByPage[0]}
                    onChange={props.onChange}
                    className="bg-gray-100"
                  >
                    {props.pagination.optionsByPage.map((el: any) => (
                      <option className="text-xl" value={el} key={el}>
                        {el}
                      </option>
                    ))}
                  </select>{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

ListPagination.propTypes = {
  pagination: PropTypes.any,
  elementsByPage: PropTypes.number,
  total: PropTypes.any,
  onClick: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.any),
  callbackfn: PropTypes.func,
  onClick1: PropTypes.func,
  elementsByPage1: PropTypes.number,
  onChange: PropTypes.func,
  optionsByPage: PropTypes.any,
  callbackfn1: PropTypes.func,
}
