import { useState } from "react";
import DataTable from "../../../Components/dataTable/DataTable";
import Add from "../../../Components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const AdminProduct = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info flex items-center gap-5 mb-5">
        <div className="text-4xl font-bold" >Products</div>
        <button
          className="p-2 cursor-pointer bg-softColor text-mainBg font-medium rounded-md"
          onClick={() => setOpen(true)}
        >Add New Products</button>
      </div>
      <DataTable slug="product" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default AdminProduct;