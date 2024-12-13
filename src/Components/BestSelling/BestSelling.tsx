import product1 from '../../assets/bestSellingproducts/product1.png';
import product2 from '../../assets/bestSellingproducts/product2.png';
import product3 from '../../assets/bestSellingproducts/product3.png';
import product4 from '../../assets/bestSellingproducts/product4.png';
import product5 from '../../assets/bestSellingproducts/product5.png';
import SellingCards from './SellingCards';
const BestSelling = () => {
    const bestSelling = [
        { imgSrc: product1, price: '£ 7.66', text: 'Brand Name - Product name, its specifications and all other details of it' },
        { imgSrc: product2, price: '£ 6.66', text: 'Brand Name - Product name, its specifications and all other details of it' },
        { imgSrc: product3, price: '£ 5.66', text: 'Brand Name - Product name, its specifications and all other details of it' },
        { imgSrc: product4, price: '£ 4.66', text: 'Brand Name - Product name, its specifications and all other details of it' },
        { imgSrc: product5, price: '£ 3.66', text: 'Brand Name - Product name, its specifications and all other details of it' },
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
                    <SellingCards id={String(index)} text={item?.text} price={item?.price} imgSrc={item?.imgSrc} />
                ))}
            </div>
        </>

    )
}

export default BestSelling