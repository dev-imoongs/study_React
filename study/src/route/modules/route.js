import { createAction, handleActions } from "redux-actions"

const SET_PREVIOUS_URL = "route/SET_PREVIOUS_URL";

export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl);

const initialState = {
  jobs: {
    developer: {
      name: "한동석",
      skills: ["React.js", "Node.js"]
    },
    planner: {
      name: "홍길동",
      skills: ["Excel", "PowerPoint"]
    }
  },
  previousUrl: "",
}

const route = handleActions({
  [SET_PREVIOUS_URL]: (state, action) => ({...state, previousUrl: action.payload})
}, initialState);

export default route;