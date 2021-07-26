import React from 'react'
import './watchlist.css'
import { watchlist } from '../../../data/dummydata'
import { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Watchlist() {
  const [data, setData] = useState(watchlist)

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'market',
      headerName: 'Markets',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        )
      },
    },
    { field: 'stock', headerName: 'Change 1D', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Buy</button>
            </Link>
          </>
        )
      },
    },
  ]

  return (
    <div className='watchlist'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default Watchlist
