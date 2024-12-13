import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import whitebluebordercart from '../../assets/icons/whitebluebordercart.png';

interface imgSrc {
    text: string,
    price: string,
    imgSrc: any,
    id: string,
}

const SellingCards: React.FC<imgSrc> = ({ imgSrc, price, text, id }) => {
    return (
        <div id={id} className="mt-4">
            <div className="relative">
                <img src={imgSrc} alt="product5" />
                <div className="absolute top-0 left-40 ml-8"><img src={WishlistHeart} alt="" /> </div>
                <div className="absolute bottom-2 left-40 ml-10"><img src={whitebluebordercart} alt="" /></div>
            </div>
            <div className=" p-4 w-[15em]">
                <p className='font-sans'>{text}</p>
                <h3 className='text-2xl mt-4 font-semibold font-quicksand' >{price}</h3>
            </div>
        </div>
    )
}

export default SellingCards