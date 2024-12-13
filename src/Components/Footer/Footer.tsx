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

const Footer = () => {

  return (
    <>
      <div className="bg-gradient-to-b from-[#0082E7] to-[#0053A5] px-40 py-10 mt-20">
        <div className="flex justify-evenly mx-40">
          <div>
            <img src={logoWhite} alt="Logo" className="w-96" />
            <div className="footer-content">
              <label className='text-white text-xl font-bold' >Subscribe Now</label>
              <p className='text-white text-base' >Learn about new offers and get more deals by joining our newsletter</p>
            </div>
            <div className="mt-4">
              <input className="p-3 outline-none rounded-s-2xl w-80" type="email" placeholder="Email address" />
              <button className="submit-email" type="button">
                <span className="text-white p-3 rounded-r-2xl border-2">Subscribe</span>
              </button>
            </div>
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
            <h3 className="pt-10 px-3 text-white text-2xl font-semibold">Categories</h3>
            <div className="pt-4 px-3 text-white font-medium"> Contact Us</div>
            <div className="pt-4 px-3 text-white font-medium"> Privacy Policy</div>
            <div className="pt-4 px-3 text-white font-medium"> Terms and Condition</div>
            <div className="pt-4 px-3 text-white font-medium"> Shipping and Payment</div>
          </div>
        </div>
      </div>

      <div className="flex justify-around bg-[#0082E7] py-10">
        <div>
          <label className='text-white' >© 2024 MT Supplies. All rights reserved.</label>
        </div>
        <div className="flex gap-10 justify-evenly">
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
