import circle1 from '../../assets/categoryCircle/c1.png';
import circle2 from '../../assets/categoryCircle/c2.png';
import circle3 from '../../assets/categoryCircle/c3.png';
import circle4 from '../../assets/categoryCircle/c4.png';
import circle5 from '../../assets/categoryCircle/c5.png';
import circle6 from '../../assets/categoryCircle/c6.png';
import Card from './Card';
const CategoryCards = () => {
	const categoryData = [
		{ label: 'Parties Decor', imgSrc: circle1 },
		{ label: 'Home Decor', imgSrc: circle2 },
		{ label: 'Office Stationary', imgSrc: circle3 },
		{ label: 'DIY households', imgSrc: circle4 },
		{ label: 'Art & Craft', imgSrc: circle5 },
		{ label: 'School Stationary', imgSrc: circle6 },
	];
	return (
		<>
			<div className="flex justify-center gap-10 mt-8 py-8 flex-wrap">
				{categoryData && categoryData?.map((item, index) => (
					<Card id={index.toString()} imgSrc={item.imgSrc} label={item?.label} />
				))}
			</div>
		</>

	)
}

export default CategoryCards