export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';
export const INCREMENTASYNC = 'INCREMENTASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = value => {
  console.log(value)
  return{
    type: INCREMENT,
    payload: value
  }
};

export const decrement = value => {
  return{
    type: DECREMENT,
    payload: value
  }
};

// export const incrementIfOdd = value => {
//   return{
//     type: INCREMENTIFODD,
//     payload: value
//   }
// };

// export const incrementAsync = value => {
//   return{
//     type: INCREMENTASYNC,
//     payload: value
//   }
// };