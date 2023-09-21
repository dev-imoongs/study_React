import { createAction, handleActions } from "redux-actions";

// action 경로 설정
// 이게 타입
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";
const INIT = "count/INIT"
const INPUTCOUNT = "count/INPUTSIZE"
const SUMCOUNT = "count/SUMCOUNT"
const SUBCOUNT = "count/SUBCOUNT"
const RESULT = "count/RESULT"

// action 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const inputcount = createAction(INPUTCOUNT);
export const init = createAction(INIT)
export const sumcount = createAction(SUMCOUNT);
export const subcount = createAction(SUBCOUNT);
export const result = createAction(RESULT);


// state 초기값 설정
const initialState = {
  number: 0,
  tempNumber: 0,
  resultNumber: 0,  
}


// reducer 제작
const count = handleActions({
  // 분기 처리
  // action에 있는 payload에 전달받은 파라미터가 담긴다.
  [INCREASE]: (state, action) => ({number: state.number + 1}),
  [DECREASE]: (state, action) => ({number: state.number - 1}),
  [INPUTCOUNT]: (state, action) => ({number: state.number + action.payload}),
  [SUMCOUNT]: (state, action) => ({tempNumber: state.tempNumber + action.payload,}),
  [SUBCOUNT]: (state, action) => ({tempNumber: state.tempNumber - action.payload}),
  [RESULT]: (state, action) => ({number: state.tempNumber + action.payload }),
  [INIT]: (state, action) => ({number: 0})
}, initialState);

export default count;