import * as types from './types';

export const actionSetStr = (str) => {
  // alert('action:'+str);
  return {
  type:types.ACTION_CHANGE_STR,
  str
  }
}
