import { ReactElement, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { createColumnHelper } from "@tanstack/react-table";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columnHelper = createColumnHelper<DataType>();
  const columns = [
    columnHelper.accessor("avatar", {
      header: () => 'Avatar',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("name", {
      header: () => 'Name',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("gender", {
      header: () => <span>Gender</span>,
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("role", {
      header: () => 'Role',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("action", {
      header: () => 'Action',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    })
  ];

  const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

  const arr: DataType[] = [
    {
      avatar: (
        <img
          style={{
            borderRadius: "50%",
          }}
          src={img}
          alt="Shoes"
        />
      ),
      name: "Emily Palmer",
      email: "emily.palmer@example.com",
      gender: "female",
      role: "user",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
  
    {
      avatar: (
        <img
          style={{
            borderRadius: "50%",
          }}
          src={img2}
          alt="Shoes"
        />
      ),
      name: "May Scoot",
      email: "aunt.may@example.com",
      gender: "female",
      role: "user",
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
  ];
  

function Customers() {
  const [data,setArr] = useState<DataType[]>(arr)

    return (
      <div className="admin-container">
        <AdminSidebar />
        <main>
        {TableHOC<DataType>(
            columns,
            data,
            "dashboard-product-box",
            "Customers",
            true
          )}
        </main>
      </div>
    )
  }
  
  export default Customers