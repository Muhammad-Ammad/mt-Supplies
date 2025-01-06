import { Link, useNavigate } from 'react-router'
import logoblack from '../../assets/logoblack.png';
import Search from '../../assets/Search.svg';
import location from '../../assets/location.svg';
import person from '../../assets/person.svg';
import heart from '../../assets/heart.svg';
import cart from '../../assets/cart.svg';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Product, setBreadCrumb } from '../../redux/mtSupplies';
import { motion, AnimatePresence } from 'framer-motion';
import { product1, product2, Brush1 } from '../../assets/index';
import SearchCard from '../Searchcard/SearchCard';

const Header = () => {
  const [chevron, setChevron] = useState<boolean>(false);
  const Products = useSelector((state: RootState) => state.mtSupplies.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const searchData: Product[] = [
    {
      id: '1',
      imgSrc: product1,
      specialText: 'Special',
      isSpecial: true,
      paragraph: 'Brand Name - Product name, its specifications and all other details of it',
      price: '7.66',
      Name: 'Pencil',
      quantity: 0,
      isDiscount: false,
      productId: 0,
      categoryName: 'Pencils',
    },
    {
      id: '2',
      imgSrc: product2,
      specialText: '',
      isSpecial: false,
      paragraph: 'Brand Name - Product name, its specifications and all other details of it',
      price: '7.66',
      Name: 'Pen',
      quantity: 0,
      isDiscount: false,
      productId: 0,
      categoryName: 'Pens',
    },
    {
      id: '3',
      imgSrc: Brush1,
      specialText: '',
      isSpecial: false,
      paragraph: 'Brand Name - Product name, its specifications and all other details of it',
      price: '7.66',
      Name: 'Brush',
      quantity: 0,
      isDiscount: false,
      productId: 0,
      categoryName: 'Brushes',
    },
  ];
  const [formData, setFormData] = useState(searchData);
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const handleChevron = (value: boolean) => {
    setChevron(value);
  };
  const handleClickCart = () => {
    const breadvalue = ['Cart'];
    dispatch(setBreadCrumb(breadvalue));
    navigate('/Cart');
  };

  const handleNavigation = () => {
    const breadvalue = ['Shop'];
    dispatch(setBreadCrumb(breadvalue));
    navigate('/Shop');
  };

  const handleSearchClick = (value: string) => {
    const formFilteredArray = searchData.filter((item) => item?.Name.toLowerCase().includes(value.toLowerCase()));
    setIsSearchMenuOpen(true);
    setFormData(formFilteredArray);
  };

  const handleAuthNavigation = (authValue: string) => {
    if (authValue === 'login') {
      navigate('/Login');
    } else {
      navigate('/Signup');
    }
  };

  return (
    <>
      <div className='sticky top-0 z-50' >
        <div className="bg-[#FFF] flex justify-around items-center w-full py-6 flex-wrap">
          {/* <!-- Logo Section --> */}
          <div className="">
            <Link to={'/'}>
              <img src={logoblack} alt="MTSUPPLIES LOGO" />
            </Link>
          </div>

          {/* <!-- Search Bar Section --> */}
          <div className="ml-3 mt-2 w-[40em]">
            <div className="relative py-2 px-3 border border-gray-300 rounded-lg flex items-center w-full">
              <img src={Search} alt="search" className='w-5' />
              <input
                className="inner-form flex-1 px-3 bg-transparent outline-none"
                type="search"
                placeholder="Search for products, categories, etc."
                aria-label="Search"
                onChange={(event) => handleSearchClick(event.target.value)}
                onClick={() => setIsSearchMenuOpen(true)}
                onBlur={() => setIsSearchMenuOpen(false)}
              />
              <AnimatePresence>
                {isSearchMenuOpen &&
                  <motion.div
                    className="flex flex-col snap-x overflow-x-auto scroll-smooth space-y-4 absolute top-14 right-0 h-96 py-2 px-3 border border-[#0082E7] bg-white rounded-xl w-full mt-2 z-30"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 24 }}
                  >

                    {formData && formData.map((item, index) => (
                      <SearchCard
                        key={index}
                        imgSrc={item?.imgSrc}
                        name={item?.Name}
                        paragraph={item?.paragraph}
                        id={item?.id}
                        specialText={'Special'}
                        isSpecial={true}
                        price={'7.66'}
                        quantity={0}
                        isDiscount={false}
                        categoryName={item?.categoryName}
                      />
                    ))}
                  </motion.div>
                }
              </AnimatePresence>

            </div>
          </div>

          {/* <!-- Icons Section --> */}
          <div className="flex justify-evenly items-center py-4 space-x-4">
            <motion.div whileTap={{ scale: 0.8 }} >
              <img src={location} alt="search" className='cursor-pointer w-6' />
            </motion.div>

            <motion.div className='relative' ref={dropdownRef} >
              <motion.div whileTap={{ scale: 0.8 }} >
                <img src={person} alt="search" className='cursor-pointer w-6' onClick={() => setIsDropDown(!isDropDown)} /></motion.div>
              {isDropDown &&
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 24 }}
                  className='absolute -left-12 w-32 h-32 bg-white mt-2 border border-[#0082E7] rounded-lg p-2 flex flex-col justify-evenly items-start' >
                  <motion.div whileTap={{ scale: 0.9 }} className='font-medium hover:text-[#0082E7] cursor-pointer' onClick={() => handleAuthNavigation('login')} >Log In</motion.div>
                  <motion.div whileTap={{ scale: 0.9 }} className='font-medium hover:text-[#0082E7] cursor-pointer' onClick={() => handleAuthNavigation('signup')}>Sign Up</motion.div>
                </motion.div>
              }
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} >
              <img src={heart} alt="search" className='cursor-pointer w-6' />
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} className='relative' onClick={() => handleClickCart()}>
              <img src={cart} alt="search" className='cursor-pointer w-6' />
              {Products.length > 0 &&
                <div className='absolute -top-1 left-3 w-4 h-4 flex bg-gradient-to-r from-[#0082E7] to-[#0053A5] rounded-xl text-white items-center justify-center text-sm font-medium' >
                  {Products.length}
                </div>
              }
            </motion.div>
          </div>
        </div>

        <div className="bg-[#0053a5] py-2">
          <div className="flex flex-col">
            <div
              className={chevron ? "hidden" : "flex items-center justify-around py-4"}
            >
              <motion.div whileTap={{ scale: 0.8 }} className="text-white text-xl font-medium"><Link to={'/'}>Home</Link></motion.div>
              <motion.div whileTap={{ scale: 0.8 }} className="text-white text-xl font-medium"><Link to={'/about'} >About Us</Link></motion.div>
              {/* <div className="text-white">Blog</div> */}
              <motion.div whileTap={{ scale: 0.8 }} className="text-white text-xl font-medium cursor-pointer "><div onClick={() => handleNavigation()} >Shop</div></motion.div>
              <motion.div whileTap={{ scale: 0.8 }} className="text-white text-xl font-medium cursor-pointer"><Link to={'/Contact'} >Contact</Link></motion.div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="absolute bg-[#0053a5] rounded-full p-1 mt-4 z-20"
                id="shows"
                onClick={() => handleChevron(!chevron)}
              >
                {chevron ? (
                  <BiChevronDown
                    size={25}
                    color='white' />
                ) : (
                  <BiChevronUp
                    size={25}
                    color='white' />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;