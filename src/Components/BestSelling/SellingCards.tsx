import WishlistHeart from '../../assets/icons/WishlistHeart.png';
import whitebluebordercart from '../../assets/icons/whitebluebordercart.png';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart, setBreadCrumb, setProductDetail } from '../../redux/mtSupplies';
import { motion } from 'framer-motion';
interface imgSrc {
    name: string,
    price: string,
    imgSrc: any,
    id: string,
    specialText: string,
    isSpecial: boolean,
    paragraph: string,
    categoryName: string,
    isDiscount: boolean,
    productId: number
}


const SellingCards: React.FC<imgSrc> = ({ imgSrc, specialText, isSpecial, paragraph, price, id, name, categoryName, isDiscount, productId }) => {
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
            Name: name,
            categoryName: categoryName,
            isDiscount: isDiscount,
            productId: productId,
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
        <div id={id} className="mt-4 cursor-pointer hover:bg-softColor">
            <div className="relative">
                <img src={imgSrc} alt="product5" className='object-cover rounded-md' onClick={() => handleClick()} />
                <motion.div whileTap={{ scale: 0.9 }} className="absolute top-0 left-40 ml-8"><img src={WishlistHeart} alt="" /> </motion.div>
                <motion.div whileTap={{ scale: 0.9 }} className="absolute bottom-2 left-40 ml-10" onClick={() => handleCartCounter()} ><img src={whitebluebordercart} alt="" /></motion.div>
            </div>
            <div className=" p-4 w-[15em]">
                <p className='font-sans'>{paragraph}</p>
                <h3 className='text-2xl mt-4 font-semibold font-quicksand' >£ {price}</h3>
            </div>
        </div>
    )
}

export default SellingCards