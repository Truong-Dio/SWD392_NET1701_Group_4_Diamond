import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Staffs.scss";
import Add from "../../components/add/Add";
// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 250,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 130,
  },
  {
    field: "createdAt",
    headerName: "Joined At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "status",
    width: 150,
    type: "boolean",
  },
];

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([false]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://epplus.azurewebsites.net/api/User/getAllUser?pageNumber=3&pageSize=10")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      }).catch((error)=>{console.log(error);
        setIsLoading(false);
      });
  }, []);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allStaff"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/Staff").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="Staff">
      <div className="info">
        <h1>Staff</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {/* TEST THE API */}

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="Staff" columns={columns} rows={data} getRowId={(row) => row.someUniqueId} />
      )} 
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Staff;
