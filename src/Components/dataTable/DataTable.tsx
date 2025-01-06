import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import "./dataTable.css";
import { Link } from 'react-router';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiTwotoneEdit } from "react-icons/ai";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};
const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //delete API
    //axios.delete(`api/${slug}/id`)
    console.log(id + ' has been deleted');
  };
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action flex gap-4 mt-4">
          <Link to={`/${props?.slug}/${params?.row?.id}`}  >
            <AiTwotoneEdit size={20} cursor={'pointer'} color='green' />
          </Link>
          <div className="delete" onClick={() => handleDelete(params?.row?.id)} >
            <RiDeleteBin5Line size={20} cursor={'pointer'} color='red' />
          </div>
        </div>
      )
    }
  }
  return (
    <div className="dataTable" >
      <DataGrid
        className='dataGrid bg-white p-5'
        rows={props?.rows}
        columns={[...props?.columns, actionColumn]}
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
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable