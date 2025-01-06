import one1 from '../../assets/logos/one1.png';
import one2 from '../../assets/logos/one2.png';
import one3 from '../../assets/logos/one3.png';
import one4 from '../../assets/logos/one4.png';
import one5 from '../../assets/logos/one5.png';
import one6 from '../../assets/logos/one6.png';

const Brand = () => {
    return (
        <div className="flex flex-row justify-center py-10 px-10 flex-wrap">
            <div className="border p-2"> <img src={one1} alt="Stabilo" className="img-fluid" /></div>
            <div className="border p-2"> <img src={one2} alt="Legami" className="img-fluid" /></div>
            <div className="border p-2"> <img src={one3} alt="Ranger" className="img-fluid" /></div>
            <div className="border p-2"> <img src={one4} alt="Moleskine" className="img-fluid" /></div>
            <div className="border p-2"> <img src={one5} alt="Parker" className="img-fluid" /></div>
            <div className="border p-2"> <img src={one6} alt="Parker" className="img-fluid" /></div>
        </div>
    )
}

export default Brand