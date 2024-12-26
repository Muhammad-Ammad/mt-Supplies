import blueLine from '../../assets/icons/blueline.png';
import { motion } from 'framer-motion';
interface cardProps {
    imgSrc: any,
    label: string,
    id: string,
}

const Card: React.FC<cardProps> = ({ imgSrc, label, id }) => {
    return (
        <motion.div
            id={id}
            className="group h-[24em] w-[13em] border border-gray-300 border-t-0 rounded-3xl overflow-hidden flex flex-col py-8 hover:bg-[#006fcc]"
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <img src={imgSrc} alt="Parties Decor" className="w-[8em] self-center mt-4" />
            <h2 className="text-center font-bold mt-4 group-hover:text-white">{label}</h2>
            <img src={blueLine} alt="blueline" className="mt-4 self-center" />
            <div className="relative">
                <div className="h-[130px] w-[130px] bg-[#006fcc] group-hover:bg-white rounded-full absolute -right-6 top-10">
                    <div className="h-[100px] w-[100px] bg-white group-hover:bg-[#006fcc] rounded-full absolute right-0 bottom-0"></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card