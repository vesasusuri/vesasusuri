import Nav from "../../components/shared/Nav/navbar";
import BannerAboutUs from "../../components/pages/aboutUs/bannerAboutUs";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import Footer from "../../components/shared/Footer/Footer";
import AboutUs1 from "../../components/pages/aboutUs/abousUs";
function AboutUs() {
    return(
       <>
        <Nav/>
        <BannerAboutUs/>
        <AboutUs1/>
        <Subscribe className="sub"/>
        <Footer/>
       </>
    )
}

export default AboutUs;