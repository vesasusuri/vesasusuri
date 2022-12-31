import "./styles/cinema.scss";
import kino1 from "../../../assets/shared/kino1.jpeg"
import kino2 from "../../../assets/shared/kino2.jpeg"
import kino3 from "../../../assets/shared/kino3.jpeg"
import kino4 from "../../../assets/shared/kino4.jpeg"

function Cinema1() {
  return (
    <>
      <h2 className="cinemaH2">Cinema Time at Digital School Prizren </h2>
      <div>
        <div>
            <img src={kino1}/>
            <img src={kino2}/>
            <img src={kino3}/>
            <img src={kino4}/>
        </div>
      </div>
    </>
  );
}

export default Cinema1;