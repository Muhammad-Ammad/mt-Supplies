import fountainpain from '../../assets/category6/diaries.png';
import notebooks from '../../assets/category6/notebooks.png';
import alcohalinks from '../../assets/category6/alcohalinks.png';
import inkpads from '../../assets/category6/inkpads.png';
const MassonryCategory = () => {
	return (
		<div className='flex justify-center gap-2 flex-wrap mt-20 overflow-hidden'>
			<div className='flex flex-col items-center gap-2'>
				<div className='relative'>
					<label className='absolute bottom-20 left-10 font-semibold text-white text-2xl'>Fountain Pens</label>
					<button className='absolute bottom-10 left-10 bg-white p-2 font-medium' >Shop Now</button>
					<img className="h-40 lg:w-80 md:w-96 sm:w-96" src={fountainpain} alt="fountain pen" />
				</div>
				<div>
					<div className='relative'>
						<label className='absolute bottom-20 left-10 font-semibold text-white text-2xl'>Fountain Pens</label>
						<button className='absolute bottom-10 left-10 bg-blue-600 text-white p-2 font-medium' >Learn More</button>
						<img className="h-40 lg:w-80 md:w-96 sm:w-96" src={fountainpain} alt="fountain pen" />
					</div>
				</div>
			</div>
			<div>
				<div className='relative'>
					<label className='absolute top-10 left-10 font-semibold text-white text-2xl'>Fountain Pens</label>
					<button className='absolute top-20 left-10 bg-blue-600 text-white p-2 font-medium' >Learn More</button>
					<img src={notebooks} alt="notebooks" className="h-80 lg:w-full sm:w-96" />
				</div>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<div>
					<div className='relative'>
						<label className='absolute bottom-20 left-10 font-semibold text-white text-2xl'>Fountain Pens</label>
						<button className='absolute bottom-10 left-10 bg-blue-600 text-white p-2 font-medium' >Buy Now</button>
						<img className="h-40 lg:w-80 md:w-96 sm:w-96" src={alcohalinks} alt="alcohalinks" />
					</div>
				</div>
				<div>
					<div className='relative'>
						<label className='absolute bottom-20 left-10 font-semibold text-white text-2xl'>Fountain Pens</label>
						<button className='absolute bottom-10 left-10 bg-blue-600 text-white p-2 font-medium' >Buy Now</button>
						<img className="h-40 lg:w-80 md:w-96 sm:w-96" src={inkpads} alt="inkpads" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MassonryCategory