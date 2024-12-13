import bannerImage from '../../assets/banners/bannerone.png';
import Slider from "react-slick";
import Image from '../Global/Image';
import { Link } from 'react-router';
import { useState } from 'react';
const Hero = () => {
	const [dotActive, setDocActive] = useState(0);
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		beforeChange: (prev: any, next: any) => {
			setDocActive(next);
		},

	};
	return (
		<div className="w-full bg-white">
			<Slider {...settings}>
				<Link to="/offer">
				<div className="relative">
						<Image imgSrc={bannerImage} />
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
							<label className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
								SHOP PARTY DECORATIONS
							</label>
						</div>
					</div>
				</Link>
				<Link to="/offer">
				<div className="relative">
						<Image imgSrc={bannerImage} />
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
							<label className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
								SHOP PARTY DECORATIONS
							</label>
						</div>
					</div>
				</Link>
				<Link to="/offer">
				<div className="relative">
						<Image imgSrc={bannerImage} />
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
							<label className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
								SHOP PARTY DECORATIONS
							</label>
						</div>
					</div>
				</Link>
			</Slider>
		</div>
	);
}

export default Hero