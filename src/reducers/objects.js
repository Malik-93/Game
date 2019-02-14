
import { calculateAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';

function objects(state, action) {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  const newState = createFlyingObjects(state);

  const now = (new Date()).getTime();
  const flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ));

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    angle,
  };
}

export default objects;




// import { calculateAngle } from '../utils/formulas';
// import createFlyingObjects from './createFlyingObjects';

// function objects(state, action) {
//   const mousePosition = action.mousePosition || {
//     x: 0,
//     y: 0,
//   };

//   const newState = createFlyingObjects(state);

//   const { x, y } = mousePosition;
//   const angle = calculateAngle(0, 0, x, y);
//   return {
//     ...newState,
//     angle,
//   };
// }

// export default objects;



// import { calculateAngle } from '../utils/formulas';

//   const objects = (state, action) => {
//   if (!action.mousePosition) return state;
//   const { x, y } = action.mousePosition;
//   const angle = calculateAngle(0, 0, x, y);
//   return {
//     ...state,
//     angle,
//   };
// }

// export default objects;