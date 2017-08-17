import keyMirror from 'key-mirror';

import { createStore } from 'redux';

const actionTypes = keyMirror({
  ADD: null,
  SUBTRACT: null,
});

const addActionCreator = value => ({ type: actionTypes.ADD, value });
const subtractActionCreator = value => ({ type: actionTypes.SUBTRACT, value });

const reducer = ( state = 0, action ) => {

  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
    case actionTypes.ADD:
      return state + action.value;
    case actionTypes.SUBTRACT:
      return state - action.value;
    default:
      return state;
  }
};

// const createStore = (reducer, initialState) => {

//   let state = initialState;

//   const subscribers = [];

//   return {
//     dispatch: (action) => {
//       state = reducer(state, action);
//       subscribers.forEach(subscription => subscription());
//     },
//     subscribe: (subscription) => {
//       subscribers.push(subscription);
//     },
//     getState: () => state,
//   };

// };

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addActionCreator(1));
store.dispatch(subtractActionCreator(2));
store.dispatch(addActionCreator(3));
store.dispatch(subtractActionCreator(4));
store.dispatch(addActionCreator(5));
