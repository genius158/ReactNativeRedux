import * as types from '../actions/types';

const initialState = {
  str:'strDefault',
};
export default function setStr(state = initialState, action){
  switch(action.type) {
    case types.ACTION_CHANGE_STR:
    let st = Object.assign({}, state, {
      str:action.str,
    });
    return st;

    default:
    return state;
  }
}
