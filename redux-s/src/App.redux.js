// 新建store
// 通过reducer简历
// 根据老的state和action生成新的state
const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10;
  }
}


// action creator
export function addGun() {
  return {type: ADD_GUN}
}

export function removeGun() {
  return {type: REMOVE_GUN}
}

export function addGunAsync() {
	return dispatch=>{
		setTimeout(()=>{
			dispatch({type: ADD_GUN})
		},2000)
	}
}
