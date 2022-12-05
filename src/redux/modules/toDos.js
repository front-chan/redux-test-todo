// src/redux/modules/counter.js

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";
// Action Creator
export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload, // 여기에 지정하지 않는 이유 setValue와 비슷한 역할인지
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const changeToDo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  // 여기는 어떤 값도 들어갈 수 있는지
  toDos: [
    {
      id: Math.floor(Math.random() * 100000),
      title: "react를 배워봅시다",
      toDo: "react를 배워봅시다",
      done: true,
    },
    {
      id: Math.floor(Math.random() * 100000),
      title: "react를 배워보까?",
      toDo: "react를 배워보까?",
      done: false,
    },
  ],
  //   ],
};

// Reducer
const toDo = (state = initialState, action) => {
  // console.log(action.payload);
  //   console.log(action);
  //   console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
        // toDos: [...initialState.toDos, { title: action.payload }], // 에러
      };
    case DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        //   console.log(action); // payload값으로 id값이 들어와야 하는데 안들어옴
        //   console.log(todo);

        // payload.id
        // newToDos: action.payload.id,
        // console.log(newToDos)
      };
    case CHANGE_TODO:
      return {
        ...state,
        toDos: state.toDos.map((todo) => {
          // console.log(action.payload);
          return todo.id === action.payload.id
            ? { ...todo, done: !action.payload.done }
            : // !todo.done 으로 작성해도 값은 같이 나오는데
              // 불변성의 규칙에 어긋난 것인지?
              { ...todo };
          // console.log(action.payload);
          /*
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else if (todo.id !== action.payload.id) {
            return {
              ...todo,
            };
          }
          */
        }),
      };
    default:
      return state;
  }
};

// export default reducer
export default toDo;
