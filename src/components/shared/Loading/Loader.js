// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const commonStyle = {
//   margin: 'auto',
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0
// };

// const sizeItem = {
//   small: '25px',
//   default: '30px',
//   large: '35px'
// }

// const leftAnimate = keyframes`
//   50%,
//   100% {
//     transform: translateX(95%);
//   }
// `

// const rightAnimate = keyframes`
//   50% {
//     transform: translateX(-95%);
//   }
//   100% {
//     transform: translateX(100%);
//   }
// `

// const LoadingContainer = styled.div`
//   width: ${props => props.size === 'small' ? 150 : (props.size === 'large' ? 170 : 147.5)}px;
//   height:  ${props => props.size === 'small' ? 150 : (props.size === 'large' ? 170 : 147.5)}px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-flow: nowrap;
// `;

// const Item = styled.div`
//    width: ${props => sizeItem[props.size] || sizeItem['default']};
//   height: ${props => sizeItem[props.size] || sizeItem['default']};
//   border-radius: 50%;
//   background: ${props => props.color || 'orangered'};
// `;

// const ItemLeft = styled(Item)`
//   transform: translateX(-100%);
//   animation: ${leftAnimate} ${props => props.speed || 1}s ease-in alternate infinite ;
// `

// const ItemRight = styled(Item)`
//   transform: translateX(-95%);
//   animation: ${rightAnimate} ${props => props.speed || 1}s ease-out alternate infinite ;
// `

// const Loading = ({ style = commonStyle, color, speed, size }) => {
//   return (
//     <LoadingContainer style={style} size={size}>
//       <ItemLeft color={color} speed={speed} size={size} />
//       <Item color={color} size={size} />
//       <ItemRight color={color} speed={speed} size={size} />
//     </LoadingContainer>
//   );
// };

// export default Loading;
import React from "react";
import { gsap } from "gsap";
import "./loader.scss"
const Loader = () => {
  const blue = React.useRef(null);
  const red = React.useRef(null);
  const yellow = React.useRef(null);
  const green = React.useRef(null);

//gsap
React.useEffect(() => {
gsap.fromTo(
  [blue.current, yellow.current], 0.5, {y: 18}, {y: -18, yoyo: true, repeat: -1}); 
  gsap.fromTo([red.current, green.current], 0.5, {y: -18}, {y:18, repeat: -1, yoyo: true});
},[])

return (
<svg viewBox="0 0 150 33.2" width="180" height="150" className="divLoader">
    <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
    <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
    <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
    <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
</svg>
)
}

function Loading() {
return (
<div>
  <Loader />
  </div>
);
}

const rootElement = document.getElementById("root");

export default Loading;