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
      return (params?.row.img ? <img className="w-8 h-8 rounded-full object-cover" src={params?.row?.img} alt='' /> : <RxAvatar size={32} className="opacity-50" />)
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

const initialFormData = [
  { id: 0, headerName: 'First Name', value: '', type: 'text' },
  { id: 1, headerName: 'Last Name', value: '', type: 'text' },
  { id: 2, headerName: 'Email', value: '', type: 'text' },
  { id: 3, headerName: 'Phone', value: '', type: 'text' },
  { id: 4, headerName: 'createdAt', value: '', type: 'text', },
  { id: 5, headerName: 'Verified', value: '', type: 'text' },
]

const AdminUser = () => {

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(userRows);
  const [formField, setFormField] = useState(initialFormData);
  const [isAddEdit, setIsAddEdit] = useState('Add');
  const [editRowId, setEditRowId] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('formField', formField);
    if (isAddEdit === 'Add') {
      const user = [...users];
      const newUser = {
        id: Math.floor(Math.random() * 1000),
        img: "",
        firstName: formField[0]?.value,
        lastName: formField[1]?.value,
        email: formField[2]?.value,
        phone: formField[3]?.value,
        createdAt: formField[4]?.value,
        verified: formField[5]?.value === 'yes' ? true : false,
      };

      user.unshift(newUser)
      setUsers(user);
      setOpen(false);
    }
    else {
      const editUsers = [...users];
      const newEditUser = {
        id: editRowId,
        img: "",
        firstName: formField[0]?.value,
        lastName: formField[1]?.value,
        email: formField[2]?.value,
        phone: formField[3]?.value,
        createdAt: formField[4]?.value,
        verified: formField[5]?.value === 'yes' ? true : false,
      };
      const findEditedRowIndex = editUsers.findIndex(item => item.id === editRowId);
      if (findEditedRowIndex !== -1) {
        editUsers.splice(findEditedRowIndex, 1, newEditUser);
      }
      setUsers(editUsers);
      setOpen(false);
    }
    //add new item
    //axios.post(`/api/${slug}s`, {})
  };

  const addNewuserButton = () => {
    setIsAddEdit('Add')
    setFormField(initialFormData);
    setOpen(true);
  };

  return (
    <div className="users">
      <div className="info flex items-center gap-5 mb-5">
        <div className="text-4xl font-bold" >Users</div>
        <button
          className="p-2 cursor-pointer bg-softColor text-mainBg font-medium rounded-md"
          onClick={addNewuserButton}
        >Add New User</button>
      </div>

      <DataTable
        slug="user"
        columns={columns}
        rows={users}
        setUsers={setUsers}
        setOpen={setOpen}
        setFormField={setFormField}
        setIsAddEdit={setIsAddEdit}
        setEditRowId={setEditRowId}
      />

      {open &&
        <Add
          isAddEdit={isAddEdit}
          handleSubmit={handleSubmit}
          setFormField={setFormField}
          formField={formField}
          slug="user"
          columns={columns}
          setOpen={setOpen}
        />}
    </div>
  );
};

export default AdminUser;