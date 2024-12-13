import { useDispatch } from 'react-redux';
import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import Whitebluebordercart from '../../assets/icons/whitebluebordercart.png';
import { useNavigate } from 'react-router';
import { addToCart, removeProductDetail, resetCart, setProductDetail } from '../../redux/mtSupplies';

interface homeCardProps {
    imgSrc: any,
    specialText: string,
    isSpecial: boolean,
    paragaraph: string,
    price: string,
    id: string,
    name: string,
}



const HomeCard: React.FC<homeCardProps> = ({ imgSrc, specialText, isSpecial, paragaraph, price, id, name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        const counterCartState = {
            id: id,
            imgSrc: imgSrc,
            specialText: specialText,
            isSpecial: isSpecial,
            paragaraph: paragaraph,
            price: price,
            quantity: 1,
            Name: name
        };
        dispatch(setProductDetail(counterCartState));
        // dispatch(removeProductDetail());
        navigate('/ProductDetail');
    };
    const handleCartCounter = () => {
        const counterCartState = {
            id: id,
            imgSrc: imgSrc,
            specialText: specialText,
            isSpecial: isSpecial,
            paragaraph: paragaraph,
            price: price,
            quantity: 1,
            Name: name
        };
        dispatch(addToCart(counterCartState));
        // dispatch(resetCart());
    };
    return (
        <div className="mt-4" key={id} id={id} >
            <div className="relative">
                <img src={imgSrc} alt="product5" onClick={() => handleClick()} />
                <div className="absolute top-0 left-0 ml-8">
                    {isSpecial &&
                        <div className='bg-lime-500 p-2 border-2 border-t-0 rounded-b-xl' >
                            <label className='text-base text-slate-50' >{specialText}</label>
                        </div>
                    }

                </div>
                <div className="absolute top-0 left-40 ml-8"><img src={WishlistHeart} alt="" /> </div>
                <div className="absolute bottom-2 left-40 ml-10" onClick={() => handleCartCounter()} ><img src={Whitebluebordercart} alt="" /></div>
            </div>
            <div className=" p-4 w-[15em]">
                <p className='font-sans'>{paragaraph}</p>
                <h3 className='text-2xl mt-4 font-semibold font-quicksand' >£ {price}</h3>
            </div>
        </div>
    )
}

export default HomeCard