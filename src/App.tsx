import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from './Pages/Home';
import Shop from "./Pages/Shop";
import AboutUs from "./Pages/AboutUs";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Contact from "./Pages/Contact/Contact";
import Payment from "./Pages/Payment/Payment";
import Admin from "./Pages/AdminPanel/Admin";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";
import AdminFooter from "./Components/AdminFooter/AdminFooter";
import AdminMenu from "./Components/AdminMenu/AdminMenu";
import AdminUser from "./Pages/AdminPanel/AdminUser/AdminUser";
import AdminProduct from "./Pages/AdminPanel/AdminProduct/AdminProduct";
import AdminUserDetail from "./Pages/AdminPanel/adminUserDetail/AdminUserDetail";
import AdminProductDetail from "./Pages/AdminPanel/adminProductDetail/AdminProductDetail";
function App() {
  const isAdmin = false;
  const Layout = () => {
    return (
      <div className="bg-mainBg text-mainColor min-h-screen flex flex-col overflow-x-hidden">
        <AdminNavbar />
        <div className="flex flex-1">
          <div className="lg:w-[250px] md:w-max sm:w-max py-1 px-5 border-r-2 border-softBg">
            <AdminMenu />
          </div>
          <div className="py-1 px-5 w-full">
            <Outlet />
          </div>
        </div>
        <AdminFooter />
      </div>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {isAdmin ? (
          <Route path="/" element={<Layout />} >
            <Route index element={<Admin />} ></Route>
            <Route path="/user" element={<AdminUser />} ></Route>
            <Route path="/product" element={<AdminProduct />} ></Route>
            <Route path="/user/:id" element={<AdminUserDetail />} ></Route>
            <Route path="/product/:id" element={<AdminProductDetail />} ></Route>
          </Route>
        ) : (
          <Route>
            <Route index element={<Home />}></Route>
            <Route path="/Login" element={<LogIn />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/shop/ProductDetail" element={<ProductDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/paymentgateway" element={<Payment />}></Route>
          </Route>
        )}
        {/*   <Route path="/journal" element={<Journal />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>  */}
      </Route>
    )
  );

  return (
    <>
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
