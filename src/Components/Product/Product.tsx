
import Search from '../../assets/Search.svg';
import CustomInput from '../Global/CustomInput';
import product1 from '../../assets/bestSellingproducts/product1.png';
import product2 from '../../assets/bestSellingproducts/product2.png'
import product3 from '../../assets/bestSellingproducts/product3.png';
import product4 from '../../assets/bestSellingproducts/product4.png';
import product5 from '../../assets/bestSellingproducts/product5.png';
import { useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';
const Product = () => {
	const [minValue, setMinValue] = useState(1000);
	const [maxValue, setMaxValue] = useState(50000);
	const products = [
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
		}
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
					{products && products.map(item => (
						<HomeCard
							id={item.id}
							imgSrc={item.imgSrc}
							specialText={item.specialText}
							isSpecial={item.isSpecial}
							paragaraph={item.paragraph}
							price={item.price}
							name={item.name}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Product