import product1 from '../../assets/bestSellingproducts/product1.png';
import product2 from '../../assets/bestSellingproducts/product2.png';
import product3 from '../../assets/bestSellingproducts/product3.png';
import product4 from '../../assets/bestSellingproducts/product4.png';
import product5 from '../../assets/bestSellingproducts/product5.png';
import SellingCards from './SellingCards';
const BestSelling = () => {
    const bestSelling = [
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
    ];
    return (
        <>
            <div className="flex flex-row justify-center flex-wrap py-20" >
                <div className='' >
                    <label className='font-normal font-quicksand text-4xl'>
                        Best selling
                    </label>
                </div>

            </div>
            <div className="flex flex-row justify-center gap-10 flex-wrap mx-40">
                {bestSelling && bestSelling.map((item, index) => (
                    <SellingCards
                        key={index}
                        id={item?.id}
                        imgSrc={item?.imgSrc}
                        specialText={item?.specialText}
                        isSpecial={item?.isSpecial}
                        paragraph={item?.paragraph}
                        price={item?.price}
                        name={item?.Name}
                        categoryName={item?.categoryName}
                        isDiscount={item?.isDiscount}
                        productId={item?.productId} />
                ))}
            </div>
        </>

    )
}

export default BestSelling