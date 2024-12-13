import { Link, useNavigate } from 'react-router'
import logoblack from '../../assets/logoblack.png';
import Search from '../../assets/Search.svg';
import location from '../../assets/location.svg';
import person from '../../assets/person.svg';
import heart from '../../assets/heart.svg';
import cart from '../../assets/cart.svg';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useState } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
const Header = () => {
  const [chevron, setChevron] = useState<boolean>(false);
  const Products = useSelector((state: RootState) => state.mtSupplies.products);
  const navigate = useNavigate();
  const handleChevron = (value: boolean) => {
    setChevron(value);
  };
  const handleClickCart = () => {
    navigate('/Cart');
  };
  
  return (
    <>
      <div className='sticky top-0 z-50' >
        <div className="bg-white flex justify-evenly items-center w-full py-6">
          {/* <!-- Logo Section --> */}
          <div className="">
            <a href="index.html">
              <img src={logoblack} alt="MTSUPPLIES LOGO" />
            </a>
          </div>

          {/* <!-- Search Bar Section --> */}
          <div className="ml-3 mt-2 w-1/2">
            <div className="py-2 px-3 border border-gray-300 rounded-full flex items-center w-full">
              <img src={Search} alt="search" className='w-5' />
              <input
                className="inner-form flex-1 px-3 py-2 bg-transparent outline-none"
                type="search"
                placeholder="Search for products, categories, etc."
                aria-label="Search"
              />
            </div>
          </div>

          {/* <!-- Icons Section --> */}
          <div className="flex justify-evenly items-center py-4 space-x-4">
            <div>
              <img src={location} alt="search" className='w-6' />
            </div>
            <div>
              <img src={person} alt="search" className='w-6' />
            </div>
            <div>
              <img src={heart} alt="search" className='w-6' />
            </div>
            <div className='relative' onClick={() => handleClickCart()}>
              <img src={cart} alt="search" className='w-6' />
              {Products.length > 0 &&
                <div className='absolute -top-1 left-3 w-4 h-4 flex bg-gradient-to-r from-[#0082E7] to-[#0053A5] rounded-xl text-white items-center justify-center text-sm font-medium' >
                  {Products.length}
                </div>
              }
            </div>
          </div>
        </div>

        <div className="bg-blue-500 py-2">
          <div className="flex flex-col">
            <div className={chevron ? "hidden" : "flex items-center justify-around py-4"}>
              <label className="text-white"><Link to={'/'}>Home</Link></label>
              <div className="text-white"><Link to={'/about'} >About Us</Link></div>
              <div className="text-white">Blog</div>
              <div className="text-white"><Link to={'/shop'} >E-store</Link></div>
              <div className="text-white">Contact</div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="absolute bg-blue-500 rounded-full p-1 mt-4 z-20"
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
  )
}

export default Header