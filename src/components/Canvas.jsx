
import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
// import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
// import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = (props) => {

  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

  // const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CurrentScore score={15} />

      {!props.gameState.started &&
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      }

      {
        props.gameState.flyingObjects.map(flyingObject => (
          <FlyingObject
            key={flyingObject.id}
            position={flyingObject.position}
          />
        ))}

      {/* {props.gameState.started &&
        <g>
          <FlyingObject position={{ x: -150, y: -300 }} />
          <FlyingObject position={{ x: 150, y: -300 }} />
        </g>
      } */}

    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired
    })).isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Canvas;





// import React from 'react';
// import PropTypes from 'prop-types';
// import Sky from './Sky';
// import Ground from './Ground';
// import CannonBase from './CannonBase';
// import CannonPipe from './CannonPipe';
// import CannonBall from './CannonBall';
// import CurrentScore from './CurrentScore';
// import FlyingObject from './FlyingObject';
// import Heart from './Heart';
// import StartGame from './StartGame';
// import Title from './Title';

// const Canvas = (props) => {

//   const gameHeight = 1200;
//   const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

//   // const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
//   return (
//     <svg
//       id="aliens-go-home-canvas"
//       preserveAspectRatio="xMaxYMax none"
//       onMouseMove={props.trackMouse}
//       viewBox={viewBox}
//     >
//       <defs>
//         <filter id="shadow">
//           <feDropShadow dx="1" dy="1" stdDeviation="2" />
//         </filter>
//       </defs>
//       <Sky />
//       <Ground />
//       <CannonPipe rotation={props.angle} />
//       <CannonBase />
//       <CannonBall position={{ x: 0, y: -100 }} />
//       <CurrentScore score={15} />
//       <FlyingObject position={{ x: -150, y: -600 }} />
//       <FlyingObject position={{ x: 150, y: -600 }} />
//       <Heart position={{ x: -300, y: 35 }} />
//       <Heart position={{ x: -250, y: 35 }} />
//       <StartGame onClick={() => console.log('Aliens, Go Home!')} />
//       <Title />
//     </svg>
//   );
// };

// Canvas.propTypes = {
//   angle: PropTypes.number.isRequired,
//   trackMouse: PropTypes.func.isRequired,
// };

// export default Canvas;





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