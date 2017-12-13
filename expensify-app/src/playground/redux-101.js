import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  // incrementBy: incrementBy
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// REDUCERS
// 1. Reducers are pure functions (output only depends on input)
// 2. Never change state or action (just read them and return object that reps new state)

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
    return state;
  }
};

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// Actions - object that gets sent to store

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// kept the below one as the longhand way without action generator to see steps
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 13
});

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 100 }));
