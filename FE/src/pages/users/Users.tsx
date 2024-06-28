import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
// { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
//import { useQuery } from "@tanstack/react-query";
// get API ve se co header and body. authorized => bo token =< header> 
// get thi chi co header 
// body la minh muon post cai gi len 
import Cookies from "js-cookie";




const fetchUsers = async () => {
  const { data } = await axios.get("https://epplus.azurewebsites.net/api/User/getAllUser?pageNumber=1&pageSize=10",{
  
    headers: {
      'accept': 'text/plain',
      'Authorization': `Bearer ${Cookies.get('token')}`
    
  }
});
  
  return data;
}


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50, type: "number" },
  {
    field: "name",
    headerName: "Name",
    width: 100,
    type: "string",
  },
  {
    field: "email",    
    headerName: "Email",
    width: 150,
    type: "string",
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    type: "string",
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    width: 250,
    type: "date",
  },
  {
    field: "avatarUrl",
    headerName: "Avatar URL",
    width: 130,
    type: "string",
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    type: "boolean",
  },
];

const Users = () => {
  console.log(Cookies.get('token'));
  const { data, isLoading, error} = useQuery(['users'], fetchUsers);
  if (isLoading) return 'Loading...';
  if (error) return console.log(error);




  return (
    <div className="users">
      <div className="info">
        <h1>Danh sách khách hàng</h1>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
