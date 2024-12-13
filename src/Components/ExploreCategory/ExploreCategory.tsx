import Rectangle1 from '../../assets/Rectangle1.png';
import Rectangle2 from '../../assets/Rectangle2.png';
import Rectangle3 from '../../assets/Rectangle3.png';
import Rectangle4 from '../../assets/Rectangle4.png';
import Rectangle5 from '../../assets/Rectangle5.png';
const ExploreCategory = () => {
    return (
        <>
            <div className="flex justify-center gap-10 mt-8 py-8 flex-wrap">
                <div className="">
                    <label className="font-bold font-quicksand text-4xl" >Explore popular categories</label>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-10 flex-wrap mt-8 py-8' >
                <div>
                    <div className=""><img src={Rectangle1} alt="pencil" className="h-60" /></div>
                    <div className="text-start mt-4 font-semibold"><p>Paints And Brushes</p></div>
                </div>
                <div>
                    <div className=""><img src={Rectangle2} alt="pencil" className="h-60" /></div>
                    <div className="text-start mt-4 font-semibold"><p>Clay Sand And Glitter</p></div>
                </div>
                <div>
                    <div className=""><img src={Rectangle3} alt="pencil" className="h-60" /></div>
                    <div className="text-start mt-4 font-semibold"><p>Canvas and Artist Pads</p></div>
                </div>
                <div>
                    <div className=""><img src={Rectangle4} alt="pencil" className="h-60" /></div>
                    <div className="text-start mt-4 font-semibold"><p>Costumes and Coats</p></div>
                </div>
                <div>
                    <div className=""><img src={Rectangle5} alt="pencil" className="h-60" /></div>
                    <div className="text-start mt-4 font-semibold"><p>Gifting</p></div>
                </div>
            </div>

        </>
    )
}

export default ExploreCategory