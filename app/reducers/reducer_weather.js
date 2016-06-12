import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  console.log(`action recievd:`, action);
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('weather reducer return new state obj');
      return [action.payload.data, ...state]
  }
  return state
}
