
import Search from '../../assets/Search.svg';
import CustomInput from '../Global/CustomInput';
import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import Whitebluebordercart from '../../assets/icons/whitebluebordercart.png';
import product1 from '../../assets/bestSellingproducts/product1.png';
import product2 from '../../assets/bestSellingproducts/product2.png'
import product3 from '../../assets/bestSellingproducts/product3.png';
import product4 from '../../assets/bestSellingproducts/product4.png';
import product5 from '../../assets/bestSellingproducts/product5.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart, setProductDetail } from '../../redux/mtSupplies';
const Product = () => {
    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(50000);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const data = [
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
		{
			id: '6',
			imgSrc: product1,
			specialText: '',
			isSpecial: false,
			paragraph: 'Brand Name - Product name, its specifications and all other details of it',
			price: '7.66',
			name: 'Brand Name',
		},
		{
			id: '7',
			imgSrc: product2,
			specialText: 'Special',
			isSpecial: true,
			paragraph: 'Brand Name - Product name, its specifications and all other details of it',
			price: '7.66',
			name: 'Brand Name',
		},
    ];
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
        };
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
        navigate('/ProductDetail');
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
                    <div className="exp-reg">
                        <CustomInput
                            type={'checkbox'}
                            id={'flexCheckDefault'}
                            htmlFor={'flexCheckDefault'}
                            label={'Oil Pastel'}
                        />
                    </div>


                    <div className="flex justify-center">
                        <div>
                            <p className='text-center text-lg text-slate-600' >Price Range</p>
                            <span className="text-center rangeValues block text-gray-700 text-sm mb-4">
                                {`$${minValue.toLocaleString()} - $${maxValue.toLocaleString()}`}
                            </span>
                            <input value={minValue}
                                min="1000"
                                max="50000"
                                step="500"
                                type="range"
                                className="range-input w-full accent-blue-500"
                                onChange={handleMinChange} />
                            <input
                                value={maxValue}
                                min="1000"
                                max="50000"
                                step="500"
                                type="range"
                                className="range-input w-full accent-blue-500"
                                onChange={handleMaxChange} />
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
                                        <div className='bg-lime-500 p-2 border-2 border-t-0 rounded-b-xl ' >
                                            <label className='text-base text-slate-50' >{item.specialText}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute top-0 left-40 ml-8"><img src={WishlistHeart} alt="" /> </div>
                                <div className="absolute bottom-2 left-40 ml-10" onClick={() => handleCartClick(item)} ><img src={Whitebluebordercart} alt="" /></div>
                            </div>
                            <div className=" p-4 w-[15em]">
                                <p className='font-sans'>{item.paragraph}</p>
                                <h3 className='text-2xl mt-4 font-semibold font-quicksand' >{item.price}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product