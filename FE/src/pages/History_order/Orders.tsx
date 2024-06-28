import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Orders.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "PO ID", width: 80 },
  {
    field: "userID",
    type: "string",
    headerName: "user ID",
    width: 150,
  },
  {
    field: "orderDetailID",
    type: "string",
    headerName: "Order detail ID",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "price",
    type: "decimal",
    headerName: "Total price",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "PO date",
    width: 100,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allOrders"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/Orders").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="Orders">
      <div className="info">
        <h1>Orders</h1>
      </div>
      <DataTable slug="Orders" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="Orders" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders;
