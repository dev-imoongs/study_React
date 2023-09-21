import { createAction, handleActions } from "redux-actions";

const FILE_INFO = "hajang-redux/FILE_INFO"
const ADD_IMAGE = "hajang-redux/ADD_IMAGE"

export const addImage = createAction(ADD_IMAGE)
export const fileInfo = createAction(FILE_INFO)

const initialState = {
  itemInfo:[
    {
      id:1,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/noyqpm2563b2_3a450f353f52475492d225390e7366fb?type=thumb&opt=S100x100"
    },
    {
      id:2,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/7pypm2gdj6y5_5e4909bbc08b444b881881c12c74dafa?type=thumb&opt=S100x100"
    },
    {
      id:3,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/g8yxojpk2aya_1a8f18cd9f934424b4777bb3ef4019fe?type=thumb&opt=S100x100"
    },
    {
      id:4,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/npral8gj82ye_14cf6c76d2ca435f96c329fa045cdfc8?type=thumb&opt=S100x100"
    },
    {
      id:5,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/meyl5xnldbz2_98bd70e113dc42079a8f5783579ae9b7?type=thumb&opt=S100x100"
    },
    {
      id:6,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/noyq3mww34r2_248d425d1565491f9de6a7bba06db567?type=thumb&opt=S100x100"
    },
    {
      id:7,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/noyq3p5gk3r2_25762b23e4bb423cb172ba97ca1a4a8c?type=thumb&opt=S100x100"
    },
    {
      id:8,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230811/7pyp6vpa36b5_dce2d618a0204db6933961102143c128?type=thumb&opt=S100x100"
    },
    {
      id:9,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230814/a9rnqglk8nre_864e3068162347d7bc4f4a3a8c4241cd?type=thumb&opt=S100x100"
    },
    {
      id:10,
      image:"https://t1.kakaocdn.net/together_action_prod/action/20230814/q4yw6kn8nxrk_c60d2b28bb964f88b2fb5ed65a629160?type=thumb&opt=S100x100"
    }
  ],
  actionBoardImages: []
}

// reducer 제작
const Hajang = handleActions({
  // 분기 처리
  // action에 있는 payload에 전달받은 파라미터가 담긴다.
  [ADD_IMAGE]: (state, action) => {
    const image = action.payload;
    console.log(action.payload)
    if (state.actionBoardImages.filter((item, i) => item.id === image.id).length !== 0) {
      alert('이미 추가된 사진입니다.');
      return{...state}
    } else {
      state.actionBoardImages = [...state.actionBoardImages,image]
      return { ...state};
    }
  }
}, initialState);

export default Hajang;