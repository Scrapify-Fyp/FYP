import React from "react";

import {
  Column,
  Table as ReactTable,
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  OnChangeFn,
  flexRender,
} from "@tanstack/react-table";

import { defaultData, DataType } from "../assets/rootData";

// import { makeData, Person } from './makeData'

function TablePaginated() {
  const rerender = React.useReducer(() => ({}), {})[1];

  //   const columns = React.useMemo<ColumnDef<DataType>[]>(
  //     () => [
  //       {
  //         header: '',
  //         id:"111",
  //         footer: props => props.column.id,
  //         columns: [
  //           {
  //             accessorKey: 'id',
  //             cell: info => info.getValue(),
  //             footer: props => props.column.id,
  //           },
  //           {
  //             accessorFn: row => row.amount,
  //             id: 'amount',
  //             cell: info => info.getValue(),
  //             header: () => <span>Amount</span>,
  //             footer: props => props.column.id,
  //           },
  //         ],
  //       },
  //       {
  //         // header: 'Info',
  //         id:"222",
  //         footer: props => props.column.id,
  //         columns: [
  //           {
  //             accessorKey: 'quantity',
  //             header: () => 'Quantity',
  //             footer: props => props.column.id,
  //           },
  //           {
  //             // header: 'More Info',
  //             id:"333",
  //             columns: [
  //               {
  //                 accessorKey: 'discount',
  //                 header: () => <span>Discount</span>,
  //                 footer: props => props.column.id,
  //               },
  //               {
  //                 accessorKey: 'status',
  //                 header: 'Status',
  //                 footer: props => props.column.id,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //     []
  //   )

  const columns = React.useMemo<ColumnDef<DataType>[]>(
    () => [
      {
        // header: '',
        id: "111",
        // footer: props => props.column.id,
        columns: [
          {
            accessorKey: "id",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.amount,
            id: "amount",
            cell: (info) => info.getValue(),
            header: () => <span>Amount</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "quantity",
            header: () => "Quantity",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "discount",
            header: () => <span>Discount</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = React.useState(defaultData);
  const refreshData = () => setData(defaultData);

  return (
    <>
      <Table
        {...{
          data,
          columns,
        }}
      />
    </>
  );
}
//TablePaginated

function Table({
  data,
  columns,
}: {
  data: DataType[];
  columns: ColumnDef<DataType>[];
}) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  return (
    <div className="transaction-box">
      <h2 className="heading">Transaction Details</h2>
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div />

      <div className="">
        <button
          className=""
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className=""
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className=""
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className=""
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className=""
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </div>
  );
}
function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: ReactTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className=""
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className=""
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className=""
    />
  );
}

export default TablePaginated;
