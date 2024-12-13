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
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/contact" element={<Contact />}></Route>
          <Route path="/journal" element={<Journal />}></Route>
          <Route path="/offer" element={<Offer />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/paymentgateway" element={<Payment />}></Route> */}
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
