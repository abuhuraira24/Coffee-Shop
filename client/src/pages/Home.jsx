// import {} from "../components/Navbar"
import Navbarr from "../components/Home/Navbar";
import Slider from "../components/Home/Slider";
import CategorySlide from "../components/Home/CategoryItems/index";
import PopularProducts from "../components/Home/PopularProducts/index";
const Home = () => {
    return (
        <>
         <Navbarr />
        <Slider/>
        <CategorySlide/>
        <PopularProducts />
        </>
    );
}



export default Home;