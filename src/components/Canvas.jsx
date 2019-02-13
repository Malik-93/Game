import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;





// import React from 'react';
// import Sky from './Sky';
// import Ground from './Ground';
// import CannonBase from './CannonBase';
// import CannonPipe from './CannonPipe';

// const Canvas = () => {
//   const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
//   return (
//     <svg
//       id="aliens-go-home-canvas"
//       preserveAspectRatio="xMaxYMax none"
//       viewBox={viewBox}
//     >
//       <Sky />
//       <Ground />
//       <CannonPipe rotation={45} />
//       <CannonBase />
//     </svg>
//   );
// };

// export default Canvas;














// import React from 'react';
// import Sky from './Sky';

// const Canvas = () => {
//   const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
//   return (
//       <div>
//     <svg
//       id="aliens-go-home-canvas"
//       preserveAspectRatio="xMaxYMax none"
//       viewBox={viewBox}
//     >
//       <Sky />
//       <circle cx={0} cy={0} r={50} />
//     </svg>
//     </div>
//   );
// };

// export default Canvas;




// import React from 'react';

// const Canvas = () => {
//     const viewBox = [
//     window.innerWidth / -2,
//     100 - window.innerHeight,
//     window.innerWidth,
//     window.innerHeight
// ]; //If we increase amount from 100 our convas will move upward
//     return (
//         <svg
//             id="aliens-go-home-canvas"
//             preserveAspectRatio="xMaxYMax none"
//             viewBox={viewBox}
//         >
//             <circle cx={0} cy={0} r={50} />
//         </svg>
//     );
// };

// export default Canvas;




// import React from 'react';

// const Canvas = () => {
//   const style = {
//     border: '1px solid black',
//   };
//   return (
//     <svg
//       id="aliens-go-home-canvas"
//       preserveAspectRatio="xMaxYMax none"
//       style={style}
//     >
//       <circle cx={0} cy={0} r={50} />
//     </svg>
//   );
// };

// export default Canvas;