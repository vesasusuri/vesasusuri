import Banner1 from "../../components/pages/banner1/banner1";
import Nav from "../../components/shared/Nav/navbar";
import Footer from "../../components/shared/Footer/Footer";
import Carousel1 from "../../components/pages/carusel1/carousel1";
import Banner2 from "../../components/pages/banner2/banner2";
import Carousel3 from "../../components/shared/Carusel3/Carousel3";
import Carousel4 from "../../components/shared/Carusel4/Carusel4";
import Korikula from "../../components/shared/Korikula/Korikula";
import Code from "../../components/pages/codeBanner/code";
function Home() {
    return(
       <>
        <Nav/>
        <Banner1/>
        <Carousel1/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Banner2/>
        <Carousel3/>
        <Carousel4/>
        <Korikula/>
        <Footer/>
       </>
    )
}

export default Home;