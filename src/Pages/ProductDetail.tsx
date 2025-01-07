import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import BreadCrumb from '../Components/Global/BreadCrumb';
import Collapse from '../Components/Global/Collapse';
import SellingCards from '../Components/BestSelling/SellingCards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { addToCart, Product } from '../redux/mtSupplies';
import { motion } from 'framer-motion';
import {
    Brush1,
    Brush2,
    Brush3,
    Brush4,
    Brush5,
    product1,
    product2,
    product3,
    product4,
    product5,
}
    from '../assets/index';
import { Product as ProductInterface } from '../redux/mtSupplies';
import { Button } from '@material-tailwind/react';

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

const initialData: ProductInterface[] = [
    {
        id: '1',
        productId: 1,
        imgSrc: product1,
        specialText: 'Special',
        isSpecial: true,
        paragraph: 'Brand Name - Pencil, its specifications and all other details of it',
        price: '1.12',
        Name: 'Pencil',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pencils'
    },
    {
        id: '2',
        productId: 2,
        imgSrc: product2,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Pen, its specifications and all other details of it',
        price: '2.14',
        Name: 'Pen',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pens'
    },
    {
        id: '3',
        imgSrc: product3,
        productId: 2,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Pen, its specifications and all other details of it',
        price: '3.16',
        Name: 'Pen',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pens'
    },
    {
        id: '4',
        productId: 2,
        imgSrc: product4,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Pen, its specifications and all other details of it',
        price: '4.22',
        Name: 'Pen',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pens'
    },
    {
        id: '5',
        productId: 1,
        imgSrc: product5,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Pencil, its specifications and all other details of it',
        price: '5.24',
        Name: 'Pencil',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pencils'
    },
    {
        id: '6',
        productId: 1,
        imgSrc: product1,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Pencil, its specifications and all other details of it',
        price: '6.26',
        Name: 'Pencil',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pencils'
    },
    {
        id: '7',
        productId: 2,
        imgSrc: product2,
        specialText: 'Special',
        isSpecial: true,
        paragraph: 'Brand Name - Pen, its specifications and all other details of it',
        price: '7.32',
        Name: 'Pen',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Pens'
    },
    {
        id: '8',
        productId: 3,
        imgSrc: Brush1,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Brush, its specifications and all other details of it',
        price: '8.34',
        Name: 'Brush',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Brushes'
    },
    {
        id: '9',
        imgSrc: Brush2,
        productId: 3,
        specialText: '',
        isSpecial: false,
        paragraph: 'Brand Name - Brush, its specifications and all other details of it',
        price: '9.36',
        Name: 'Brush',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Brushes'
    },
    {
        id: '10',
        productId: 3,
        imgSrc: Brush3,
        specialText: 'Special',
        isSpecial: true,
        paragraph: 'Brand Name - Brush, its specifications and all other details of it',
        price: '10.42',
        Name: 'Brush',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Brushes'
    },
    {
        id: '11',
        productId: 3,
        imgSrc: Brush4,
        specialText: 'Special',
        isSpecial: true,
        paragraph: 'Brand Name - Brush, its specifications and all other details of it',
        price: '11.44',
        Name: 'Brush',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Brushes'
    },
    {
        id: '12',
        productId: 3,
        imgSrc: Brush5,
        specialText: 'Special',
        isSpecial: true,
        paragraph: 'Brand Name - Brush, its specifications and all other details of it',
        price: '12.46',
        Name: 'Brush',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Brushes'
    },
    {
        id: '13',
        imgSrc: Brush4,
        productId: 3,
        specialText: 'Special',
        isSpecial: true,
        paragraph: 'Brand Name - Brush, its specifications and all other details of it',
        price: '13.52',
        Name: 'Brush',
        quantity: 0,
        isDiscount: false,
        categoryName: 'Brushes'
    },
];

const ProductDetail = () => {
    const { productDetails } = useSelector((state: RootState) => state.mtSupplies);
    const [form, setForm] = useState<Product[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const [relatedSearchData, setRelatedSearchData] = useState<Product[]>(initialData);

    useEffect(() => {
        window.scrollTo(0, 0);
        // if (form.length === 0) {
        const products = [...productDetails];
        if (products.length > 0) {
            const splitArray = products[0].paragraph?.split(',') || [];
            if (splitArray.length > 1 && !splitArray[1].includes('<br />')) {
                products[0] = { ...products[0], paragraph: `${splitArray[0]}, <br />${splitArray[1]}` }
            };
        };
        const filteredData = initialData.filter(item => item?.categoryName?.toLowerCase() === products[0]?.categoryName?.toLowerCase() && item?.id !== products[0]?.id);
        setRelatedSearchData(filteredData);
        setForm(products);
        // }
    }, [productDetails]);


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
                <div className="flex flex-wrap justify-center">
                    {/* Left Section: Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="bg-white flex items-center justify-center flex-wrap overflow-hidden w-full">
                            <img
                                src={form && form[0]?.imgSrc}
                                // src={pencil}
                                alt="Product1"
                                className="object-contain max-w-full h-[30rem]"
                            />
                        </div>
                    </div>
                    {/* Right Section: Product Details */}
                    <div className="w-full md:w-1/2 p-4 md:p-10">
                        <div>
                            <BreadCrumb />
                        </div>
                        <div className="flex flex-wrap mt-6">
                            <label
                                className="text-xl md:text-2xl font-semibold"
                                dangerouslySetInnerHTML={{
                                    __html: form && form[0]?.paragraph,
                                }}
                            ></label>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <label className="text-2xl md:text-3xl font-bold">
                                £ {form && form[0]?.price}
                            </label>
                            {form && form[0]?.isDiscount && (
                                <>
                                    <label className="line-through text-gray-500">3.00</label>
                                </>
                            )}
                        </div>
                        <div className="mt-1">
                            {form && form[0]?.isDiscount && (
                                <label className="text-green-700 font-medium">(33% off)</label>
                            )}
                        </div>
                        <div className="flex gap-4 mt-4 items-center">
                            <button
                                onClick={() => decreaseProductDetailQuantity()}
                                className="w-8 h-8 bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-gray-300 hover:border-gray-300"
                            >
                                -
                            </button>
                            <label className="font-medium text-lg">
                                {form && form[0]?.quantity}
                            </label>
                            <button
                                onClick={() => increaseProductDetailQuantity()}
                                className="w-8 h-8 bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-gray-300 hover:border-gray-300"
                            >
                                +
                            </button>
                            <Button
                                className="bg-gradient-to-r from-[#0082E7] to-[#0053A5] p-3 md:px-8 font-medium rounded-xl text-gray-200 hover:text-white"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                onClick={() => handleAddCart()}
                            >
                                Add to Cart
                            </Button>
                        </div>
                        <div className="mt-8">
                            <label className="text-base md:text-lg font-medium">
                                SKU: 8901425031926
                            </label>
                        </div>
                        <div className="flex mt-8 justify-between w-full md:w-1/2">
                            <label className="text-base md:text-lg font-medium">
                                Estimated Delivery
                            </label>
                            <label className="text-base md:text-lg font-bold">
                                Within a Week
                            </label>
                        </div>
                        <div className="mt-4 flex justify-between w-full md:w-1/2">
                            <select
                                className="p-1 w-20 outline-none text-gray-500"
                                value={"UK"}
                            >
                                <option value={"1"}>UK</option>
                            </select>
                            <select
                                className="p-1 w-full md:w-64 outline-none text-gray-500"
                                value={"Brimingham Other"}
                            >
                                <option value={"1"}>Brimingham Other</option>
                            </select>
                        </div>
                        <div className="mt-6">
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
                        {relatedSearchData &&
                            relatedSearchData.map((item, index) => (
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
                                        paragraph={item.paragraph}
                                        price={item.price}
                                        name={item.Name}
                                        categoryName={item?.categoryName}
                                        isDiscount={item?.isDiscount}
                                        productId={item?.productId} />
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