import { createColumnHelper } from "@tanstack/react-table";
import TableHOC from "./TableHOC";

export interface DataType {
    id: string;
    quantity: number;
    discount: number;
    amount: number;
    status: string;
  }

  const columnHelper = createColumnHelper<DataType>();
  const columns = [
    columnHelper.accessor("id", {
      header: () => 'Id',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("amount", {
      header: () => 'Amount',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("quantity", {
      header: () => "Quantity",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("discount", {
      header: () => <span>Discount</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      footer: (info) => info.column.id,
    }),
  ];

const DashboardTable = ({ InputData = []}:{InputData: DataType[] }) => {
    
  return TableHOC<DataType>(
    columns,
    InputData,
    "transaction-box",
    "Top Transaction",
    true
  )
}

export default DashboardTable