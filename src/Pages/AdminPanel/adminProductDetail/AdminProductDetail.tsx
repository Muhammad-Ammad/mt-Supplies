import Single from "../../../Components/single/Single";
import { singleProduct } from "../../../data";

const AdminProductDetail = () => {
  //Fetch Data and send to single Component
  return (
    <div className="product" >
      <Single {...singleProduct} />
    </div>
  );
};

export default AdminProductDetail;