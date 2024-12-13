import '../index.css';
import Header from "../Components/Header/Header";
import Hero from '../Components/Hero/Hero';
import Logo from '../Components/Logo/Logo';
import CategoryCards from '../Components/CategoryCards/CategoryCards';
import MassonryCategory from '../Components/MassonryCategory/MassonryCategory';
import ExploreCategory from '../Components/ExploreCategory/ExploreCategory';
import Brand from '../Components/Brand/Brand';
import Product from '../Components/Product/Product';
import Footer from '../Components/Footer/Footer';
import BestSelling from '../Components/BestSelling/BestSelling';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div>
                <Header />
                <Hero />
                <Logo />
                <CategoryCards />
                <BestSelling />
                <MassonryCategory />
                <ExploreCategory />
                <Brand />
                <Product />
                <Footer />
            </div>
        </>
    )
}

export default Home