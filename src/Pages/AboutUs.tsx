import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import { fone } from "../assets/index"
import one1 from '../assets/logos/one1.png';
import one2 from '../assets/logos/one2.png';
import one3 from '../assets/logos/one3.png';
import one4 from '../assets/logos/one4.png';
import one5 from '../assets/logos/one5.png';
import one6 from '../assets/logos/one6.png';

const AboutUs = () => {
  const links = [


    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [


    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  return (
    <>
      <Header />
      <div className="flex flex-col px-6 md:px-20 lg:px-32 xl:px-52 gap-5 mt-10">
        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-500">
          About us.
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#000]">
          Stationery obsessed, perfectionists at heart.
        </div>
        <div>
          <img className="rounded-xl mt-10 w-full" src={fone} alt="banner" />
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0082E7] mt-10 md:mt-16 lg:mt-20">
          We're in over 100 stores <br className="hidden md:block" /> around the world.
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-10">
          <div className="border p-2">
            <img src={one1} alt="Stabilo" className="h-20 md:h-32 lg:h-40" />
          </div>
          <div className="border p-2">
            <img src={one2} alt="Legami" className="h-20 md:h-32 lg:h-40" />
          </div>
          <div className="border p-2">
            <img src={one3} alt="Ranger" className="h-20 md:h-32 lg:h-40" />
          </div>
          <div className="border p-2">
            <img src={one4} alt="Moleskine" className="h-20 md:h-32 lg:h-40" />
          </div>
          <div className="border p-2">
            <img src={one5} alt="Parker" className="h-20 md:h-32 lg:h-40" />
          </div>
          <div className="border p-2">
            <img src={one6} alt="Parker" className="h-20 md:h-32 lg:h-40" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs