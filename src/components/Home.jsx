import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;