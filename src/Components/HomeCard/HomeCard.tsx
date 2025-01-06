import { useDispatch } from 'react-redux';
import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import Whitebluebordercart from '../../assets/icons/whitebluebordercart.png';
import { useNavigate } from 'react-router';
import { addToCart, removeProductDetail, resetCart, setBreadCrumb, setProductDetail } from '../../redux/mtSupplies';
import { motion } from 'framer-motion';

interface homeCardProps {
    imgSrc: any,
    specialText: string,
    isSpecial: boolean,
    paragraph: string,
    price: string,
    id: string,
    name: string,
}



const HomeCard: React.FC<homeCardProps> = ({ imgSrc, specialText, isSpecial, paragraph, price, id, name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        const counterCartState = {
            id: id,
            imgSrc: imgSrc,
            specialText: specialText,
            isSpecial: isSpecial,
            paragraph: paragraph,
            price: price,
            quantity: 1,
            Name: name
        };
        dispatch(setProductDetail(counterCartState));
        // dispatch(removeProductDetail());
        const breadArray = ['Shop', 'ProductDetail'];
        dispatch(setBreadCrumb(breadArray));
        navigate('/shop/ProductDetail');
    };
    const handleCartCounter = () => {
        const counterCartState = {
            id: id,
            imgSrc: imgSrc,
            specialText: specialText,
            isSpecial: isSpecial,
            paragraph: paragraph,
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
                        <div className='bg-light-green-600 p-2 border-2 border-t-0 rounded-b-xl' >
                            <label className='text-base text-white' >{specialText}</label>
                        </div>
                    }

                </div>
                <motion.div whileTap={{ scale: 0.9 }} className="absolute top-0 left-40 ml-8"><img src={WishlistHeart} alt="WishlistHeart" /> </motion.div>
                <motion.div whileTap={{ scale: 0.9 }} className="absolute bottom-2 left-40 ml-10" onClick={() => handleCartCounter()} ><img src={Whitebluebordercart} alt="" /></motion.div>
            </div>
            <div className=" p-4 w-[15em]">
                <p className='font-sans'>{paragraph}</p>
                <h3 className='text-2xl mt-4 font-semibold font-quicksand' >£ {price}</h3>
            </div>
        </div>
    )
}

export default HomeCard