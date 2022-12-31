import Nav from "../../components/shared/Nav/navbar";
import Footer from "../../components/shared/Footer/Footer";
import BannerOurTeam from "../../components/pages/ourTeam/banner";
import Subscribe from "../../components/shared/Subscribe/Subscribe";

function React() {
    return(
       <>
        <Nav/>
        <BannerOurTeam/>
        <Subscribe/>
        <Footer/>
       </>
    )
}

export default React;