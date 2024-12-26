
import Search from '../../assets/Search.svg';
import CustomInput from '../Global/CustomInput';
import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import Whitebluebordercart from '../../assets/icons/whitebluebordercart.png';
import product1 from '../../assets/bestSellingproducts/product1.png';
import product2 from '../../assets/bestSellingproducts/product2.png'
import product3 from '../../assets/bestSellingproducts/product3.png';
import product4 from '../../assets/bestSellingproducts/product4.png';
import product5 from '../../assets/bestSellingproducts/product5.png';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart, setBreadCrumb, setProductDetail } from '../../redux/mtSupplies';
import BreadCrumb from '../Global/BreadCrumb';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';

const Product = () => {
    const progressRef = useRef<HTMLDivElement>(null);
    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(50000);
    const min = 1000;
    const max = 50000;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [
        {
            id: '1',
            imgSrc: product1,
            specialText: 'Special',
            isSpecial: true,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pencil',
        },
        {
            id: '2',
            imgSrc: product2,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pen',
        },
        {
            id: '3',
            imgSrc: product3,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pen',
        },
        {
            id: '4',
            imgSrc: product4,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pen',
        },
        {
            id: '5',
            imgSrc: product5,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pencil',
        },
        {
            id: '6',
            imgSrc: product1,
            specialText: '',
            isSpecial: false,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pencil',
        },
        {
            id: '7',
            imgSrc: product2,
            specialText: 'Special',
            isSpecial: true,
            paragraph: 'Brand Name - Product name, its specifications and all other details of it',
            price: '7.66',
            name: 'Pen',
        },
    ];
    useEffect(() => {
        if (progressRef.current) {
            const left = ((minValue - min) / (max - min)) * 100;
            const right = 100 - ((maxValue - min) / (max - min)) * 100;
            progressRef.current.style.left = `${left}%`;
            progressRef.current.style.right = `${right}%`;
        }
    }, [minValue, maxValue, min, max]);


    const handleMinChange = (e: any) => {
        const value = parseInt(e.target.value);
        if (value < maxValue) {
            setMinValue(value);
        }
    };

    const handleMaxChange = (e: any) => {
        const value = parseInt(e.target.value);
        if (value > minValue) {
            setMaxValue(value);
        }
    };
    const handleClick = (item: any) => {
        const counterCartState = {
            id: item?.id,
            imgSrc: item?.imgSrc,
            specialText: item?.specialText,
            isSpecial: item?.isSpecial,
            paragaraph: item?.paragraph,
            price: item?.price,
            quantity: 1,
            Name: item?.name
        };
        dispatch(setProductDetail(counterCartState));
        const breadArray = ['Shop', 'ProductDetail'];
        dispatch(setBreadCrumb(breadArray))
        navigate('/shop/ProductDetail');
    };
    const handleCartClick = (item: any) => {
        const counterCartState = {
            id: item?.id,
            imgSrc: item?.imgSrc,
            specialText: item?.specialText,
            isSpecial: item?.isSpecial,
            paragaraph: item?.paragraph,
            price: item?.price,
            quantity: 1,
            Name: item?.name
        };
        dispatch(addToCart(counterCartState));
    };
    return (
        <div className="">
            <div className='px-40 flex justify-start mt-10' >
                <div className='w-1/4 ml-10' ></div>
                <div>
                    <BreadCrumb />
                </div>
            </div>
            <div className="flex flex-row justify-center px-40">
                <div className="flex flex-col gap-10 basis-1/4 mt-4">
                    <div className="flex flex-row border-2 rounded-3xl px-3 items-center gap-2">
                        <img src={Search} alt="search" className='w-5' />
                        <input
                            className="flex-1 px-3 py-2 bg-transparent outline-none"
                            type="search"
                            placeholder="Catogoty, brand, etc."
                            aria-label="Search"
                        />
                    </div>
                    <div className="">
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Express Delivery'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Regular Delivery'}
                        />
                    </div>

                    <div className="exp-reg">
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Oil Pastel'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Acrylic Paints'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Gauoche Paints'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Fabric Paint'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Brush'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Water Color'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Oil Color'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Thiners or Cleaners or Gesso or Texture'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Poster Colors'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Glass Colors'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Assorted Tools'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Spray Paint'}
                        />
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Face or Finger Paint'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p className='text-center text-lg text-slate-600' >Price Range</p>
                            <span className="text-center rangeValues block text-gray-700 text-sm mb-4">
                                {`$${minValue.toLocaleString()} - $${maxValue.toLocaleString()}`}
                            </span>

                            <div className='w-[15em] relative h-2 rounded-md bg-gray-300' >
                                <div ref={progressRef} className='absolute h-2 bg-[#0082E7] rounded'></div>
                            </div>

                            <div className='relative' >
                                <input
                                    value={minValue}
                                    min={min}
                                    max={max}
                                    step="500"
                                    type="range"
                                    className="absolute w-full -top-2 h-2 accent-blue-500 bg-transparent appearance-none pointer-events-none"
                                    onChange={handleMinChange} />
                                <input
                                    value={maxValue}
                                    min={min}
                                    max={max}
                                    step="500"
                                    type="range"
                                    className="absolute w-full -top-2 h-2 accent-blue-500 bg-transparent appearance-none pointer-events-none"
                                    onChange={handleMaxChange} />
                            </div>

                            <div className='mt-10 place-self-center' >
                                <motion.button whileTap={{ scale: 0.9 }}>
                                    <Button
                                        fullWidth
                                        className="bg-[#0082E7] font-titleFont"
                                        children={'Filter'}
                                        onPointerEnterCapture={undefined}
                                        onPointerLeaveCapture={undefined}
                                        placeholder={undefined}
                                    />
                                </motion.button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex flex-row justify-center gap-10 flex-wrap basis-4/5">
                    {data && data.map(item => (
                        <div className="mt-4">
                            <div className="relative" >
                                <img src={item.imgSrc} alt="product5" onClick={() => handleClick(item)} />
                                <div className="absolute top-0 left-0 ml-8">
                                    {item.isSpecial && (
                                        <div className='bg-light-green-600 p-2 border-2 border-t-0 rounded-b-xl ' >
                                            <div className='text-base text-white' >{item.specialText}</div>
                                        </div>
                                    )}
                                </div>
                                <motion.div whileTap={{ scale: 0.9 }} className="absolute top-0 left-40 ml-8"><img src={WishlistHeart} alt="" /> </motion.div>
                                <motion.div whileTap={{ scale: 0.9 }} className="absolute bottom-2 left-40 ml-10" onClick={() => handleCartClick(item)} ><img src={Whitebluebordercart} alt="" /></motion.div>
                            </div>
                            <div className=" p-4 w-[15em]">
                                <p className='font-sans'>{item.paragraph}</p>
                                <h3 className='text-2xl mt-4 font-semibold font-quicksand' >£ {item.price}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product