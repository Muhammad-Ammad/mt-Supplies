import mtSupplies from '../../assets/banners/mtsuppliesbr.png';
const Logo = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				{/* Image Section */}
				<div className="flex justify-center items-center w-full py-5">
					<img src={mtSupplies} alt="Stationary" className="w-1/2 h-auto" />
				</div>

				{/* Text Section */}
				<div className="flex flex-col items-center justify-center py-5">
					<h1 className="text-[#0082E7] text-4xl font-bold font-quicksand">
						Shop by category
					</h1>
					<p className="text-[#2E2E2E] text-xl font-normal font-quicksand text-center mt-10">
						Pick the category you are looking for and start shopping now!
					</p>
				</div>
			</div>
		</>
	)
}

export default Logo