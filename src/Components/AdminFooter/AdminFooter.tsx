import { AiOutlineCopyright } from "react-icons/ai";
const AdminFooter = () => {
  return (
    <div className="footer flex justify-between p-8">
      <span className="font-semibold" >MT Supplies</span>
      <span><div className="flex items-center text-sm"><AiOutlineCopyright /> Mt Supplies Admin Dashboard</div></span>
    </div>
  );
};

export default AdminFooter;