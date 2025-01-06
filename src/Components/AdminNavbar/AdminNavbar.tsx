import { IoIosNotificationsOutline } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaExpand } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import logoblack from '../../assets/logoblack.png';
const AdminNavbar = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between">
      <div className="logo">
        <img src={logoblack} alt="" className="w-24" />
      </div>
      <div className="icons flex items-center gap-5">
        <div className="flex gap-5 lg:flex md:flex sm:hidden" >
          <CiSearch size={20} />
          <FiGrid size={20} />
          <FaExpand size={20} />
        </div>
        <div className="notification flex items-center relative">
          <IoIosNotificationsOutline size={24} />
          <span className="flex items-center justify-center bg-red-600 text-white w-4 h-4 rounded-full absolute -top-2 -right-2 text-sm" >1</span>
        </div>
        <div className="user flex gap-3">
          <img
            className="w-[1.63rem] h-[1.63rem] rounded-full object-cover"
            src="https://images.pexels.com/photos/29929142/pexels-photo-29929142/free-photo-of-black-and-white-portrait-of-a-llama.jpeg"
            alt="image"
          />
          <span>jane</span>
        </div>
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default AdminNavbar;