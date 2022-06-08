const redux = require("redux");

// reducer function is a standard JS function called by redux library (Inputs: old state + dispatched action)
// must always return a new State Object as an Output and therefore it should always be a pure function
// same input should lead to same output
// compulsorily accepts two args (i.e. state and action)
// produces new state snapshots
// spits out new state snapshots whenever an action reaches it
const counterReducer = (state = {counter : 0}, action) => {
    if (action.type === "increment") {
      return {
        counter: state.counter + 1,
      };
    }

    if (action.type === "decrement") {
      return {
        counter: state.counter - 1,
      };
    }

    return state;
};

// creating store
// createStore method exposed by the redux library for managing the data
// and the data that it manages is then determined by the reducer function
const store = redux.createStore(counterReducer);

// getting latest state from the store
const counterSubscriber = () => {
    // getState is inbuilt method provided by the store
    const latestState = store.getState();
    console.log(latestState);
}

// subscription to store
store.subscribe(counterSubscriber);

// action
store.dispatch({type : 'increment'});
store.dispatch({type : 'decrement'});


// Notes:
// state can be a number/string but in case of reduce it'll be an object
// reducer function is responsible for changing the store
// action(which is an object) responsible for dispatching the action
// store is the central piece and the essence of redux
// Http req or fetching & writing data from/to localstorage should not be sent to reducer