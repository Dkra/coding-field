// The state here is this reducer's responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      console.log('-------------');
      console.log(action);
      return action.payload
  }
  return state
}
