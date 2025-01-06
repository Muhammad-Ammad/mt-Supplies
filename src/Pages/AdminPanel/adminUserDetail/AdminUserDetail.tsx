import Single from "../../../Components/single/Single";
import { singleUser } from "../../../data";

const AdminUserDetail = () => {
    //Fetch Data and send to single Component
    return (
        <div className="user" >
            <Single {...singleUser} />
        </div>
    );
};

export default AdminUserDetail;