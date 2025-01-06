import logoWhite from '../../assets/logos/logowhite.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import phoneWhite from '../../assets/icons/phonewhite.png';
import pointerwhite from '../../assets/icons/pointerwhite.png';
import cash from '../../assets/icons/cash.png';
import bankTransfer from '../../assets/icons/banktransfer.png';
import visa from '../../assets/icons/visa.png';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [newsLetter, setNewsLetter] = useState('');

  const handleSubmit = () => {
    if (!emailMessage && email) {
      setNewsLetter('Thank you for subscribing. <br /> Our newsletter will be with you soon.')
    }
  };

  const handleChange = (value: string) => {
    setEmail(value)
  };

  const handleBlur = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(value);
    if (isValid) {
      setEmailMessage('');
    } else {
      setEmailMessage('Enter a valid Email');
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#0082E7] to-[#0053A5] py-10 mt-20">
        <div className="flex justify-evenly flex-wrap lg:px-0 md:px-0 sm:px-10">
          <div>
            <img src={logoWhite} alt="Logo" className="w-80" />
            <div className="mt-10">
              <label className='text-white text-xl font-bold' >Subscribe Now</label>
              <p className='text-white text-base' >Learn about new offers and get more deals by joining our newsletter</p>
            </div>

            {newsLetter ? (
              <div className="mt-4 text-lg font-medium text-[#FFF]" dangerouslySetInnerHTML={{ __html: newsLetter }} />
            ) : (
              <div className="mt-4">
                <input
                  className="p-3 outline-none lg:rounded-s-2xl md:rounded-s-2xl sm:rounded-none lg:w-80 md:w-80 sm:w-full border border-white"
                  type="email"
                  value={email}
                  onChange={(event) => handleChange(event.target.value)}
                  onBlur={(event) => handleBlur(event.target.value)}
                  placeholder="Email address"
                />
                <button
                  className="text-white lg:mt-0 md:mt-0 sm:mt-2 p-3 lg:rounded-r-2xl md:rounded-r-2xl sm:rounded-none border lg:w-auto md:w-auto sm:w-full border-white"
                  type="button"
                  onClick={handleSubmit}
                ><span>Subscribe</span></button>
                <div className='ml-2 mt-2 text-red-700 font-semibold' >{emailMessage}</div>
              </div>
            )}


            <div className='flex flex-row mt-4'>
              <div className="pt-4"><img src={instagram} alt="ig" className="px-3" /></div>
              <div className="pt-4"><img src={twitter} alt="twitter" className="px-3" /></div>
              <div className="pt-4"><img src={facebook} alt="fb" className="px-3" /></div>
            </div>
          </div>

          <div className='py-10'>
            <label className="text-white text-2xl font-semibold">Reach us</label>
            <div className='flex flex-row py-5 gap-3'>
              <img src={whatsapp} alt="whatsapp" className="" />
              <label className='text-white font-medium'>(+441) 58 8284186</label>
            </div>
            <div className="flex flex-row gap-3">
              <img src={phoneWhite} alt="whatsapp" className="" />
              <label className='text-white font-medium' >(+441) 58 8284186</label>
            </div>
            <div className="flex flex-row py-5 gap-3"><img src={pointerwhite} alt="whatsapp" className="" />
              <label className='text-white font-medium' >View Store Location</label>
            </div>
          </div>

          <div>
            <h3 className="pt-10 px-3 text-white text-2xl font-semibold">Categories</h3>
            <div className="pt-4 px-3 text-white font-medium"> Books</div>
            <div className="pt-4 px-3 text-white font-medium"> Stationery</div>
            <div className="pt-4 px-3 text-white font-medium"> Art & Craft</div>
            <div className="pt-4 px-3 text-white font-medium"> Classroom & Supplies</div>
          </div>

          <div>
            <h3 className="pt-10 px-3 text-white text-2xl font-semibold">Support</h3>
            <div className="pt-4 px-3 text-white font-medium"> Contact Us</div>
            <div className="pt-4 px-3 text-white font-medium"> Privacy Policy</div>
            <div className="pt-4 px-3 text-white font-medium"> Terms and Condition</div>
            <div className="pt-4 px-3 text-white font-medium"> Shipping and Payment</div>
          </div>
        </div>
      </div>

      <div className="flex justify-around bg-[#0082E7] py-10 flex-wrap">
        <div>
          <label className='text-white' >© 2024 MT Supplies. All rights reserved.</label>
        </div>
        <div className="flex gap-10 justify-evenly flex-wrap lg:mt-0 md:mt-10 sm: mt-7">
          <div>
            <label className='text-white' >We accept these payment methods</label>
          </div>
          <div className='flex gap-5'>
            <img src={cash} alt="cash" />
            <img src={bankTransfer} alt="Bank transfer" />
            <img src={visa} alt="visa" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
