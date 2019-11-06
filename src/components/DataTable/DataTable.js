import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import Pagination from '../Pagination'
import './styles.css'

export default class DataTable extends Component {
  render() {
    return (
      <ReactTable
        {...this.props}
        PaginationComponent={Pagination}
        defaultPageSize={
          this.props.data.length > 5 ? 5 : this.props.data.length
        }
        showPagination={true}
        showPaginationTop={false}
        showPaginationBottom={true}
        showPageSizeOptions={false}
        showPageJump={false}
      />
    )
  }
}
