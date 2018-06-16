// the reducer will be called over and over again
// whenever an action gets dispatched
// updates the state
//
// you'll probably have a lot of if statements in reducer
const reducer = (state = 0, action) => {
  if (action.type == "INCREMENT") {
    return state + 1;
  } else {
    return state;
  }
}

// creates a store
let store = Redux.createStore(reducer);

document.addEventListener('click', (e) => {
  store.dispatch({
    type: "INCREMENT"
  });
});

store.subscribe(() => {
  var state = store.getState();

  var finalHTML = `
  <div>hello i'm a counter</div>
  <div>${state}</div>
  `
  document.getElementById('root').innerHTML = finalHTML;
})