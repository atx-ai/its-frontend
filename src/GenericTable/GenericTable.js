import React from "react";
import {
  Button,
  DataTable,
  TableBatchAction,
  TableBatchActions,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
} from "@carbon/react";
import './GenericTable.scss';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;
const GenericTable = (props) => {

  const  {rows, headers} = props
  return (
    <div className="generic-table">
      <DataTable
        rows={rows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getSelectionProps,
          getBatchActionProps,
          onInputChange,
          /* the selected rows are provided as a render prop */
          selectedRows,
        }) => (
          <TableContainer>
            <TableToolbar>
              {/* make sure to apply getBatchActionProps so that the bar renders */}
              <TableBatchActions {...getBatchActionProps()}>
                {/* inside of you batch actinos, you can include selectedRows */}
                <TableBatchAction
                // onClick={batchActionClick(selectedRows)}
                >
                  Ghost
                </TableBatchAction>
                <TableBatchAction
                // onClick={batchActionClick(selectedRows)}
                >
                  Ghost
                </TableBatchAction>
                <TableBatchAction
                // onClick={batchActionClick(selectedRows)}
                >
                  Ghost
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarSearch onChange={onInputChange} />
            </TableToolbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </div>
  );
};

export default GenericTable;
