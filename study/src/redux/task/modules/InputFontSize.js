import { createAction, handleActions } from "redux-actions";

// action 경로 설정
const INPUTSIZE = "InputFontSize/INPUT";

// action 생성
export const changeFontSize = createAction(INPUTSIZE);

// state 초기값 설정
const initialState = {
  fontsize: "16px"
}

// reducer 제작
const InputFontSize = handleActions({
  // 분기 처리
  // action에 있는 payload에 전달받은 파라미터가 담긴다.
  [INPUTSIZE]: (state, action) => ({ fontsize: action.payload })
}, initialState);

export default InputFontSize;