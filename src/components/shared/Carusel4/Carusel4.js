import React from "react";
import "./styles/Carusel4.scss";

const Carousel4 = () => {

  return (
    
    <>
      <div class="marquee">
        <ul class="marquee-content">
          <li>
            <p>300 <br></br>ACTIVE STUDENTS</p>
          </li>
          <li>100% <br></br>SUCCESS RATE</li>
          <li>400+<br></br> WEB'S MADE</li>
          <li>300+<br></br> APP'S MADE</li>
          <li>400+ <br></br>GAMES MADE </li>
          <li>100+ <br></br>STUDENTS THAT GOT A JOB</li>
        </ul>
      </div>
    </>
  );
};

export default Carousel4;

// const root = document.documentElement;
// const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
// const marqueeContent = document.querySelector("ul.marquee-content");

// root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
// marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// }
