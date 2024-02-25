import { ReactElement, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columnHelper = createColumnHelper<DataType>();
  const columns = [
    columnHelper.accessor("user", {
      header: () => 'User',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("amount", {
      header: () => 'Amount',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("discount", {
      header: () => "Discount",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("quantity", {
      header: () => <span>Quantity</span>,
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: () => 'Status',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("action", {
      header: () => 'Action',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    })
  ];

  const arr: DataType[] = [
    {
      user: "Charas",
      amount: 4500,
      discount: 400,
      quantity: 3,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="green">Shipped</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
      user: "Xavirors",
      amount: 6999,
      discount: 400,
      status: <span className="purple">Delivered</span>,
      quantity: 6,
      action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
  ];


function Transaction() {
  const [data,setArr] = useState<DataType[]>(arr)

    return (
      <div className="admin-container">
        <AdminSidebar />
        <main>
        {TableHOC<DataType>(
            columns,
            data,
            "dashboard-product-box",
            "Products",
            true
          )}
        </main>
      </div>
    )
  }
  
  export default Transaction