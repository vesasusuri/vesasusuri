import "./styles/cinema.scss";
import kino1 from "../../../assets/shared/kino1.jpeg";
import kino2 from "../../../assets/shared/kino2.jpeg";
import kino3 from "../../../assets/shared/kino3.jpeg";
import kino4 from "../../../assets/shared/kino4.jpeg";
import { FormattedMessage } from "react-intl";

function Cinema1() {
  return (
    <>
      <h2 className="cinemaH2">
        <FormattedMessage
          id="cinoTime0"
          defaultMessage="Cinema Time at Digital School Prizren"
        />
      </h2>
      <div className="divTextCino">
        <p className="divTextCinop">
          <FormattedMessage
            id="cinoTime"
            defaultMessage="Every Saturday, we organize cinema at cinemarine, with the aim of teaching general knowledge about programming and technology, children will be shown technological films, which will also be fun for them."
          />
        </p>
        <p className="divTextCinop">
          <FormattedMessage
            id="cinoTime2"
            defaultMessage="After the film is over, together with their instructor, the children will discuss what they learned from the film they watched."
          />
        </p>
      </div>

      <main>
        <div className="grid-container">
          <div className="column">
          <img src={kino1} />
          <img src={kino3} />
            <img src={kino4} />
          </div>
          <div className="column">
          <img src={kino2} />
           <img src={kino1} />
            <img src={kino4} />
          </div>

          <div className="column">
          <img src={kino3} />
          <img src={kino2} />
          <img src={kino3} />
          </div>

        </div>
      </main>
      
    </>
  );
}

export default Cinema1;
