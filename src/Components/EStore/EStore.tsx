
import Search from '../../assets/Search.svg';
import CustomInput from '../Global/CustomInput';
import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import Whitebluebordercart from '../../assets/icons/whitebluebordercart.png';
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
    from '../../assets/index'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearSearchedProduct, Product as ProductInterface, setBreadCrumb, setProductDetail } from '../../redux/mtSupplies';
import BreadCrumb from '../Global/BreadCrumb';
import { motion } from 'framer-motion';
import { Button } from '@material-tailwind/react';
import Slider from '@mui/material/Slider';
import { RootState } from '../../store';
interface categoryList {
    id: number,
    label: string,
    isChecked: boolean
}

const categoryData: categoryList[] = [
    { id: 1, label: 'Pencil', isChecked: false },
    { id: 2, label: 'Pen', isChecked: false },
    { id: 3, label: 'Brush', isChecked: false },
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

const Product = () => {
    const [value, setValue] = useState<number[]>([1, 20]);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const [globalData, setData] = useState<ProductInterface[]>(initialData);
    const [category, setCategory] = useState(categoryData);
    const searchedProduct = useSelector((state: RootState) => state.mtSupplies.searchedProduct);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (searchedProduct.length > 0) {
            const filterGrid = initialData.filter(item => item.categoryName.toLowerCase() === searchedProduct[0].categoryName.toLowerCase());
            setData(filterGrid);
        }
        return (() => {
            dispatch(clearSearchedProduct());
        })
    }, []);

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

    const handleUpdateForm = (updatedItem: any) => {
        setCategory((prevCategory) =>
            prevCategory.map((item) =>
                item.id === updatedItem.id
                    ? { ...item, isChecked: !item.isChecked }
                    : item
            )
        );
        setIsDisabled(false);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setIsDisabled(false);
        setValue(newValue as number[]);
    };

    function valuetext(value: number) {
        return `${value}°C`;
    };

    const handleFilter = () => {
        const productsData = [...globalData];
        const categoryData = [...category];
        const categoryIds = categoryData.filter(item => item.isChecked === true).map(item => item.id);

        const filterproductData = productsData.filter(item => categoryIds.includes(item.productId));
        const filteredData = filterproductData.filter(item => Number(item.price) >= value[0] && Number(item.price) < value[1]);
        setData(filteredData);
    };

    const handleResetFilter = () => {
        setData(initialData);
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
                <div className="flex flex-col gap-3 basis-1/4 mt-4">
                    <div className="text-xl font-semibold">Category</div>
                    <div className="exp-reg ml-4">
                        <div className="text-lg text-gray-800 font-medium cursor-pointer">Stationery</div>
                        <ul className="ml-4">
                            {category && category.map((item, index) => {
                                return (
                                    <li>
                                        <CustomInput
                                            key={index}
                                            type={'checkbox'}
                                            id={String(item.id)}
                                            label={item.label}
                                            checked={item.isChecked}
                                            onChange={() => handleUpdateForm(item)}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className='w-[15rem] place-self-center mt-10' >
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                min={1}
                                max={20}
                                step={2}
                                value={value}
                                color='primary'
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </div>
                        <div className='flex gap-5 mt-10 ml-2 place-self-center' >
                            <motion.button whileTap={{ scale: 0.9 }}>
                                <Button
                                    fullWidth
                                    disabled={isDisabled}
                                    className="bg-[#0082E7] font-titleFont"
                                    children={'Filter'}
                                    onClick={handleFilter}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    placeholder={undefined}
                                />
                            </motion.button>
                            <motion.button whileTap={{ scale: 0.9 }}>
                                <Button
                                    fullWidth
                                    color='red'
                                    disabled={isDisabled}
                                    children={'Reset Filter'}
                                    onClick={handleResetFilter}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                    placeholder={undefined}
                                />
                            </motion.button>
                        </div>

                    </div>

                </div>
                <div className="flex flex-row justify-center gap-10 flex-wrap basis-4/5">
                    {globalData && globalData.map(item => (
                        <div className="mt-4">
                            <div className="w-[15rem] relative" >
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