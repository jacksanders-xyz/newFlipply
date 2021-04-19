import { combineReducers } from 'redux';

const stance = (state=[], action) => {
  switch(action.type) {
    case "SET_STANCE":
      return action.stance
    default:
      return state
  }
}

export default combineReducers({
  stance,
})
