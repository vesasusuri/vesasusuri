import Nav from "../../components/shared/Nav/navbar";
import Projekts from "../../components/pages/projekts/projekts";
import Footer from "../../components/shared/Footer/Footer";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import BannerProjects from "../../components/pages/projekts/bannerProjekts";
function Projects() {
    return(
       <>
        <Nav/>
        <BannerProjects/>
        <Projekts/>
        <Subscribe/>
        <Footer/>
       </>
    )
}

export default Projects;