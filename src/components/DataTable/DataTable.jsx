import { useMemo, useState } from 'react'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded'
import './DataTable.css'

const defaultSortValue = (row, column) => row[column.key]

const DataTable = ({ columns, rows, keyField = 'id' }) => {
  const [sort, setSort] = useState(null)

  const sortedRows = useMemo(() => {
    if (!sort) return rows
    const column = columns.find((col) => col.key === sort.key)
    const accessor = column?.sortValue ?? defaultSortValue
    const factor = sort.direction === 'asc' ? 1 : -1

    return [...rows].sort((a, b) => {
      const valueA = accessor(a, column)
      const valueB = accessor(b, column)
      if (valueA < valueB) return -1 * factor
      if (valueA > valueB) return 1 * factor
      return 0
    })
  }, [rows, sort, columns])

  const handleSort = (column) => {
    if (!column.sortable) return
    setSort((prev) => {
      if (prev?.key !== column.key) return { key: column.key, direction: 'asc' }
      if (prev.direction === 'asc') return { key: column.key, direction: 'desc' }
      return null
    })
  }

  return (
    <div className="data-table">
      <table className="data-table__table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`data-table__head${column.sortable ? ' data-table__head--sortable' : ''}`}
                onClick={() => handleSort(column)}
              >
                <span className="data-table__head-label">
                  {column.label}
                  {column.sortable &&
                    (sort?.key === column.key ? (
                      sort.direction === 'asc' ? (
                        <ArrowDropUpRoundedIcon fontSize="small" />
                      ) : (
                        <ArrowDropDownRoundedIcon fontSize="small" />
                      )
                    ) : (
                      <UnfoldMoreRoundedIcon fontSize="small" />
                    ))}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => (
            <tr key={row[keyField]}>
              {columns.map((column) => (
                <td key={column.key} className="data-table__cell">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
