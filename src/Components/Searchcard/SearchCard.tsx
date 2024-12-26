import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setBreadCrumb, setProductDetail } from '../../redux/mtSupplies';

interface searchCardProps {
    imgSrc: any,
    name: string,
    paragaraph: string,
    id: string,
    specialText: string,
    isSpecial: boolean,
    price: string,
    quantity: number,
    isDiscount: boolean
}

const SearchCard = ({ id, specialText, isSpecial, price, imgSrc, name, paragaraph }: searchCardProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigation = () => {
        // const counterCartState = {
        //     id: id,
        //     imgSrc: imgSrc,
        //     specialText: specialText,
        //     isSpecial: isSpecial,
        //     paragaraph: paragaraph,
        //     price: price,
        //     quantity: 1,
        //     Name: name
        // };
        // dispatch(setProductDetail(counterCartState));
        const breadArray = ['Shop'];
        dispatch(setBreadCrumb(breadArray));
        navigate('/shop');
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='flex  w-full h-1/2 bg-white hover:bg-blue-100 rounded-xl cursor-pointer'
            onClick={() => handleNavigation()}
        >
            <img src={imgSrc} className='w-36 h-36 object-contain' ></img>
            <div className='ml-4 flex flex-col justify-start' >
                <div className='text-xl font-semibold py-2' >
                    {name}
                </div>
                <div className='text-lg py-4' >
                    {paragaraph}.
                </div>
            </div>
        </motion.div>
    );
};

export default SearchCard;