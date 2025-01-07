import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import "./dataTable.css";
import { Link } from 'react-router';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiTwotoneEdit } from "react-icons/ai";
import { useEffect, useState } from 'react';

type Props = {
  columns: GridColDef[];
  rows: any;
  slug: string;
  setUsers: React.Dispatch<React.SetStateAction<({
    id: number;
    img: string;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    createdAt: string;
    verified: boolean | undefined;
  } | {
    id: number;
    img: string;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    createdAt: string;
    verified?: undefined;
  })[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFormField: React.Dispatch<React.SetStateAction<formDataInterface[]>>;
  setIsAddEdit: React.Dispatch<React.SetStateAction<string>>;
  setEditRowId: React.Dispatch<React.SetStateAction<number>>;
};

type formDataInterface = {
  type: string;
  id: number;
  headerName: string;
  value: string;
};

const DataTable = (props: Props) => {
  const [rowData, setRowData] = useState([
    {
      id: 0,
      img: "",
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      createdAt: "",
      verified: false,
    }
  ]);
  useEffect(() => {
    setRowData(props?.rows);
  }, [props?.rows]);

  const handleDelete = (id: number) => {
    //delete API
    //axios.delete(`api/${slug}/id`);
    const data = rowData;
    const deleteData = data.filter(item => item.id !== id);
    setRowData(deleteData);
    props?.setUsers(deleteData);
    console.log(deleteData + ' record has been deleted');
  };

  const handleEdit = (row: any) => {
    props?.setOpen(true);
    props?.setIsAddEdit('Edit');
    props?.setEditRowId(row?.id);
    const editUserFields = [
      { id: 0, headerName: 'First Name', value: row?.firstName, type: 'text' },
      { id: 1, headerName: 'Last Name', value: row?.lastName, type: 'text' },
      { id: 2, headerName: 'Email', value: row?.email, type: 'text' },
      { id: 3, headerName: 'Phone', value: row?.phone, type: 'text' },
      { id: 4, headerName: 'createdAt', value: row?.createdAt, type: 'text', },
      { id: 5, headerName: 'Verified', value: row?.verified, type: 'text' },
    ]
    props?.setFormField(editUserFields);
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action flex gap-4 mt-4">
          {/* <Link to={`/${props?.slug}/${params?.row?.id}`} onClick={() => handleEdit(params?.row)} >
            <AiTwotoneEdit size={20} cursor={'pointer'} color='green' />
          </Link> */}
          <div onClick={() => handleEdit(params?.row)} >
            <AiTwotoneEdit size={20} cursor={'pointer'} color='green' />
          </div>
          <div className="delete" onClick={() => handleDelete(params?.row?.id)} >
            <RiDeleteBin5Line size={20} cursor={'pointer'} color='red' />
          </div>
        </div>
      )
    }
  };
  return (
    <div className="dataTable" >
      <DataGrid
        className='dataGrid bg-white p-5'
        rows={rowData}
        columns={[...props?.columns || [], actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable