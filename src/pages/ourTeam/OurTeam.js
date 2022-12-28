import Nav from "../../components/shared/Nav/navbar";
import Footer from "../../components/shared/Footer/Footer";
import BannerOurTeam from "../../components/pages/ourTeam/banner";
import OurTeam2 from "../../components/pages/ourTeam/ourTeam";
import DevTeam from "../../components/pages/ourTeam/devTeam";
import DrejtuesitTeam from "../../components/pages/ourTeam/drejtusitTeam";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
function OurTeam() {
    return(
       <>
        <Nav/>
        <BannerOurTeam/>
        <OurTeam2/>
        <DevTeam/>
        <DrejtuesitTeam/>
        <Subscribe/>
        <Footer/>
       </>
    )
}

export default OurTeam;