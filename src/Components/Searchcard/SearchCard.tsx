import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setBreadCrumb, setSearchItem } from '../../redux/mtSupplies';

interface searchCardProps {
    imgSrc: any,
    name: string,
    paragraph: string,
    id: string,
    specialText: string,
    isSpecial: boolean,
    price: string,
    quantity: number,
    isDiscount: boolean
    categoryName: string,
}

const SearchCard = ({ id, specialText, isSpecial, price, imgSrc, name, paragraph, categoryName }: searchCardProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigation = () => {
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
        };
        const searchedProduct = [counterCartState];
        const breadArray = ['Shop'];
        dispatch(setBreadCrumb(breadArray));
        dispatch(setSearchItem(searchedProduct));
        navigate('/shop');
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='flex w-full h-1/2 bg-white hover:bg-blue-100 rounded-xl cursor-pointer'
            onClick={() => handleNavigation()}
        >
            <img src={imgSrc} className='w-36 h-36 object-contain' ></img>
            <div className='ml-4 flex flex-col justify-start' >
                <div className='text-xl font-semibold py-2' >
                    {categoryName}
                </div>
                <div className='text-lg py-4' >
                    {paragraph}.
                </div>
            </div>
        </motion.div>
    );
};

export default SearchCard;