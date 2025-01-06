import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../../Components/dataTable/DataTable";
import { userRows } from "../../../data";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import Add from "../../../Components/add/Add";
const columns: GridColDef<(typeof userRows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img', headerName: 'AVATAR', width: 100,
    renderCell: (params) => {
      return (params?.row.img ? <img className="w-8 h-8 rounded-full object-cover" src={params?.row?.img} alt='' /> : <RxAvatar size={24} className='place-self-center' />)
    }
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    type: 'string',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    type: 'string',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 200,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 150,
  }
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];
const AdminUser = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div className="users">
      <div className="info flex items-center gap-5 mb-5">
        <div className="text-4xl font-bold" >Users</div>
        <button
          className="p-2 cursor-pointer bg-softColor text-mainBg font-medium rounded-md"
          onClick={() => setOpen(true)}
        >Add New User</button>
      </div>
      <DataTable slug="adminUser" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default AdminUser;