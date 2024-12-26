import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import product1 from '../assets/bestSellingproducts/product1.png';
import product2 from '../assets/bestSellingproducts/product2.png';
import product3 from '../assets/bestSellingproducts/product3.png';
import product4 from '../assets/bestSellingproducts/product4.png';
import product5 from '../assets/bestSellingproducts/product5.png';
import BreadCrumb from '../Components/Global/BreadCrumb';
import Collapse from '../Components/Global/Collapse';
import SellingCards from '../Components/BestSelling/SellingCards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { addToCart, Product } from '../redux/mtSupplies';
import { motion } from 'framer-motion';
const ProductDetail = () => {
    const { productDetails } = useSelector((state: RootState) => state.mtSupplies);
    const [form, setForm] = useState<Product[]>([]);
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        window.scrollTo(0, 0);
        if (form.length === 0) {
            const products = [...productDetails]; // Create a copy to avoid direct mutation or created a shallow copy
            if (products.length > 0) {
                const splitArray = products[0].paragaraph?.split(',') || [];
                if (splitArray.length > 1 && !splitArray[1].includes('<br />')) {
                    products[0] = { ...products[0], paragaraph: `${splitArray[0]}, <br />${splitArray[1]}` }
                }
            }
            setForm(products);
        }
    }, []);

    const bestSelling = [
        {
            id: '1',
            imgSrc: product1,
            specialText: 'Special',
            isSpecial: true,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Brand Name',
        },
        {
            id: '2',
            imgSrc: product2,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Brand Name',
        },
        {
            id: '3',
            imgSrc: product3,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Brand Name',
        },
        {
            id: '4',
            imgSrc: product4,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Brand Name',
        },
        {
            id: '5',
            imgSrc: product5,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Brand Name',
        },
    ];
    const handleAddCart = () => {
        const payload = { ...form[0] }
        dispatch(addToCart(payload));
    };

    const increaseProductDetailQuantity = () => {
        const newForm = form.map(item => ({
            ...item,
            quantity: item.quantity + 1,
        }));

        setForm(newForm);
    };

    const decreaseProductDetailQuantity = () => {
        const newForm = form.map(item => ({
            ...item,
            quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
        }));

        setForm(newForm);
    };
    return (
        <>
            <Header />
            <div >
                <div className='flex justify-center flex-wrap' >
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="w-3/4 h-3/4 bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                                src={form && form[0]?.imgSrc}
                                alt="Product1"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className='w-1/2 p-10' >
                        <div>
                            <BreadCrumb />
                        </div>
                        <div className='flex flex-wrap mt-10' >
                            <label className='text-2xl font-semibold' dangerouslySetInnerHTML={{ __html: form && form[0]?.paragaraph }} ></label><br />
                        </div>
                        <div className='flex items-center gap-5 mt-10' >
                            <label className='text-3xl font-bold' >£ {form && form[0]?.price}</label>
                            {form && form[0]?.isDiscount && <><label className='line-through text-gray-500'>3.00</label><br /></>}
                        </div>
                        <div className='mt-1'>
                            {form && form[0]?.isDiscount && <label className='text-green-700 font-medium' >(33% off)</label>}
                        </div>
                        <div className='flex gap-6 mt-4 items-center' >
                            <div>
                                <button onClick={() => decreaseProductDetailQuantity()} className='w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-gray-300 hover:border-gray-300'>
                                    -
                                </button>
                            </div>
                            <div><label className='font-medium text-lg'>{form && form[0]?.quantity}</label></div>
                            <div>
                                <button onClick={() => increaseProductDetailQuantity()} className='w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-gray-300 hover:border-gray-300'>
                                    +
                                </button>
                            </div>
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleAddCart()} className='bg-gradient-to-r from-[#0082E7] 
                        to-[#0053A5] py-2 px-8 font-medium ml-4 rounded-xl text-gray-200 hover:text-white duration-300 
                        hover:from-[#0053A5] hover:to-[#003B7A] active:bg-violet-700 focus:outline-none focus:ring focus:ring-blue-300' type='button' >Add to Cart</motion.button><br />
                        </div>
                        <div className='mt-10' >
                            <label className='text-lg font-medium' >SKU: 8901425031926</label>
                        </div>
                        <div className='flex mt-10 justify-between w-1/2' >
                            <div><label className='text-lg font-medium' >Estimated Delivery</label></div>
                            <div><label className='text-lg font-bold' >Within a Week</label></div>
                        </div>
                        <div className='mt-5 flex justify-between w-1/2' >
                            <div>
                                <select className='p-1 w-20 outline-none text-gray-500' value={'UK'} >
                                    <option value={'1'} >UK</option>
                                </select>
                            </div>
                            <div>
                                <select className='p-1 w-64 outline-none text-gray-500' value={'Brimingham Other'} >
                                    <option value={'1'} >Brimingham Other</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <Collapse />
                        </div>
                    </div>
                </div>
                <div className=' ml-10 flex justify-start flex-wrap' >
                    <div className='w-3/4' >
                        <div>
                            <label className='text-3xl font-semibold' >Product details</label>
                        </div>
                        <div className='mt-10 flex justify-between items-center border-b border-gray-300 pb-2'>
                            <div>
                                <label className='text-lg font-medium' >COLOUR:</label>
                            </div>
                            <div>
                                <label className='text-lg text-gray-500' >Black</label>
                            </div>
                        </div>
                        <div className='mt-10 flex justify-between items-center border-b border-gray-300 pb-2'>
                            <div>
                                <label className='text-lg font-medium' >MATERIAL:</label>
                            </div>
                            <div>
                                <label className='text-lg text-gray-500' >Recycled Paper</label>
                            </div>
                        </div>
                        <div className='mt-10 flex justify-between items-center border-b border-gray-300 pb-2'>
                            <div>
                                <label className='text-lg font-medium' >DIMENSIONS:</label>
                            </div>
                            <div>
                                <label className='text-lg text-gray-500' >16 (H) x 20.5 (W) x 5.5 (D) cm</label>
                            </div>
                        </div>
                        <div className='mt-10 flex justify-between items-center border-b border-gray-300 pb-2'>
                            <div>
                                <label className='text-lg font-medium' >PACKAGE CONTENTS:</label>
                            </div>
                            <div>
                                <label className='text-lg text-gray-500' >1 Pencil</label>
                            </div>
                        </div>
                        <div className='mt-10 flex justify-between items-center border-b border-gray-300 pb-2'>
                            <div>
                                <label className='text-lg font-medium' >ORIGIN:</label>
                            </div>
                            <div>
                                <label className='text-lg text-gray-500' >Designed and Made in UK</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-40 ml-10 flex justify-start flex-wrap' >
                    <div className='w-3/4' >
                        <div>
                            <label className='text-3xl font-semibold' >Related Products</label>
                        </div>
                    </div>
                    <div className="mt-10 flex snap-x overflow-x-auto scroll-smooth space-x-4">
                        {bestSelling &&
                            bestSelling.map((item, index) => (
                                <div
                                    key={index}
                                    className="snap-start flex-shrink-0 w-80"
                                >
                                    <SellingCards
                                        key={index}
                                        id={item.id}
                                        imgSrc={item.imgSrc}
                                        specialText={item.specialText}
                                        isSpecial={item.isSpecial}
                                        paragaraph={item.paragraph}
                                        price={item.price}
                                        name={item.name}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail