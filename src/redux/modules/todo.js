// src/redux/modules/counter.js

// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload, // 여기에 지정하지 않는 이유 setValue와 비슷한 역할인지
  };
};

// Initial State
const initialState = {
  // 여기는 어떤 값도 들어갈 수 있는지
  toDos: [
    {
      id: 1,
      title: "react를 배워봅시다",
      toDo: "react를 배워봅시다",
      done: true,
    },
    {
      id: 2,
      title: "react를 배워보까?",
      toDo: "react를 배워봅시다",
      done: false,
    },
  ],
};

// Reducer
const toDo = (state = initialState, action) => {
  //   console.log(action.payload);
  //   console.log(action);
  //   console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
        // toDos: [...initialState.toDos, { title: action.payload }], // 에러
      };
    default:
      return state;
  }
};

// export default reducer
export default toDo;
