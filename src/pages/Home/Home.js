import Banner1 from "../../components/pages/banner1/banner1";
import Nav from "../../components/shared/Nav/navbar";
import Footer from "../../components/shared/Footer/Footer";
import Carousel1 from "../../components/pages/carusel1/carousel1";
import Banner2 from "../../components/pages/banner2/banner2";
import Carousel3 from "../../components/shared/Carusel3/Carousel3";
import Carousel4 from "../../components/shared/Carusel4/Carusel4";
import Korikula from "../../components/shared/Korikula/Korikula";
import Ide from "../../components/shared/ideTheme/ide";
import Subscribe from "../../components/shared/Subscribe/Subscribe";

import "./home.scss"
import Statistikat from "../../components/pages/statistikat/statistikat";
function Home() {
    return(
       <div className="divPalidhje">
        <Nav/>
        <Banner1/>
        <Banner2/>
        <Carousel3/>
        <Carousel1/>
        {/* <Carousel4/> */}
        <Statistikat/>
        <Korikula/>
        <Ide/>
        <Subscribe/>
        <Footer/>
       </div>
    )
}

export default Home;