import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { emptyCart } from "../assets/images/index";
import BreadCrumb from "../Components/Global/BreadCrumb";
import ItemCard from "../Components/ItemCard/ItemCard";
import Header from "../Components/Header/Header";
import { resetCart } from "../redux/mtSupplies";
import { RootState } from "../store";
import Footer from "../Components/Footer/Footer";
import { Link, useNavigate } from "react-router";
import { Button } from "@material-tailwind/react";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.mtSupplies.products);
    const [totalAmt, setTotalAmt] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        let price = 0;
        const cartItems = products;
        cartItems.map((item) => {
            price += +item.price * item.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [products]);

    useEffect(() => {
        if (totalAmt <= 20) {
            setShippingCharge(2);
        } else if (totalAmt <= 40) {
            setShippingCharge(4);
        } else if (totalAmt > 41) {
            setShippingCharge(8);
        }
    }, [totalAmt]);

    const handleNavigation = () => {
        navigate('/shop');
    };

    return (
        <>
            <Header />
            <div className="max-w-container mx-auto px-4 mt-4">
                <BreadCrumb />
                {products.length > 0 ? (
                    <div className="pb-20">
                        <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
                            <h2 className="col-span-2">Product</h2>
                            <h2>Price</h2>
                            <h2>Quantity</h2>
                            <h2>Sub Total</h2>
                        </div>
                        <div className="mt-5">
                            {products.map((item) => (
                                <div key={item.id}>
                                    <ItemCard item={item} />
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => dispatch(resetCart())}
                            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
                        >
                            Reset cart
                        </button>

                        <div className="max-w-7xl gap-4 flex justify-end mt-4">
                            <div className="w-96 flex flex-col gap-4">
                                <h1 className="text-2xl font-semibold text-right">Total</h1>
                                <div>
                                    <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                        Subtotal
                                        <span className="font-semibold tracking-wide font-titleFont">

                                            £{totalAmt.toFixed(2)}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                        Shipping Charge
                                        <span className="font-semibold tracking-wide font-titleFont">

                                            £{shippingCharge}
                                        </span>
                                    </p>
                                    <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                                        Total
                                        <span className="font-bold tracking-wide text-lg font-titleFont">

                                            £{(totalAmt + shippingCharge).toFixed(2)}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex justify-end">
                                    <Link to="/paymentgateway">
                                        <Button
                                            fullWidth
                                            className="bg-gradient-to-r from-[#0082E7] to-[#0053A5] font-titleFont"
                                            children={'Proceed to Checkout'}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                            placeholder={undefined}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
                    >
                        <div>
                            <img
                                className="w-80 rounded-lg p-4 mx-auto"
                                src={emptyCart}
                                alt="emptyCart"
                            />
                        </div>
                        <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                            <h1 className="font-titleFont text-xl font-bold uppercase">
                                Your Cart is Empty.
                            </h1>
                            <p className="text-sm text-center px-10 -mt-2">
                                Your Shopping cart lives to serve. Give it purpose.
                            </p>
                            {/* <Link to="/shop"> */}
                            <Button
                                onClick={() => handleNavigation()}
                                className="bg-gradient-to-r from-[#0082E7] to-[#0053A5] rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                Continue Shopping
                            </Button>
                            {/* </Link> */}
                        </div>
                    </motion.div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
