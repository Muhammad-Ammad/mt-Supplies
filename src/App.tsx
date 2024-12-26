import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
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
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
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
  )
}

export default App
