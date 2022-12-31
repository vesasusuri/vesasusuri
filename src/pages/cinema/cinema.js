import Nav from "../../components/shared/Nav/navbar";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import Footer from "../../components/shared/Footer/Footer";
import CinemaBanner from "../../components/pages/cinema/cinemaBanner";
import Cinema1 from "../../components/pages/cinema/Cinema";

function Cinema() {
    return(
       <>
        <Nav/>
        <CinemaBanner/>
        <Cinema1/>
        <Subscribe/>
        <Footer/> 
       </>
    )
}

export default Cinema;