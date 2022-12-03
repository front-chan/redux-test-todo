import { createStore } from "redux";
import { combineReducers } from "redux";
import toDo from "../modules/todo";

const rootReducer = combineReducers({
  //   counter: counter, // Store와 module을 연결시켜 줌
  toDo,
});
const store = createStore(rootReducer);

export default store;
