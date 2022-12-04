import React, { useState } from "react";
import "./App.css";
// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, changeToDo } from "./redux/modules/todo";
import styled from "styled-components";

function App() {
  // const [toDos, setToDos] = useState([
  //   {
  //     id: 1,
  //     title: "react를 배워봅시다",
  //   },
  //   {
  //     id: 2,
  //     title: "react를 배워보까?",
  //   },
  // ]);

  const [title, setTitle] = useState("");
  const [toDo, setToDo] = useState("");
  const todos = useSelector((state) => state.toDo.toDos);
  // const todoId = useSelector((state) => console.log(state));
  // const selectId = useSelector((todos) => console.log(todos.toDo));
  // const todoId = useSelector((todos.map((todo) => todo)) => console.log(selectId.id));
  // console.log(todos);
  // console.log(todoId);
  // console.log(selectId);
  const dispatch = useDispatch();

  // function onClickAddHandler() {
  //   dispatch(addToDo(title));
  //   // const newToDo = {
  //   //   id: toDos.length + 1,
  //   //   title,
  //   // };
  //   // setToDos([...toDos, newToDo]);
  // }

  function onAddToDo(e) {
    e.preventDefault();
    if (title === "" && toDo === "") {
      return;
    }
    setTitle("");
    setToDo("");
    dispatch(
      addToDo({
        // payload의 값
        id: todos.length + 1,
        title,
        toDo,
        done: true,
      })
    );
  }

  function onDeleteToDo(id) {
    // const newToDo = todos.filter((todo) => (todo.id = id));
    dispatch(deleteToDo(id));
  }
  // function onChangeHandler(event) {
  //   setTitle(event.target.value);
  // }
  // console.log(title);

  function onChangeToDo(todos) {
    // console.log(id, done);
    // console.log(todos);
    dispatch(changeToDo(todos));
  }

  return (
    <div>
      <Form onSubmit={onAddToDo}>
        <Label htmlFor="title">제목</Label>
        <Input
          type="text"
          id="title"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          // required
        />
        <Label htmlFor="todo">내용</Label>
        <Input
          type="text"
          id="todo"
          value={toDo || ""}
          onChange={(e) => setToDo(e.target.value)}
          // required
        />
        <Button>추가하기</Button>
      </Form>
      <div>
        <h1>Woring</h1>
        {todos.map((todo) =>
          todo.done === true ? (
            <div key={todo.id}>
              <h4>{todo.title}</h4>
              <h6>{todo.toDo}</h6>
              <button onClick={() => onDeleteToDo(todo.id)}>삭제하기</button>
              <button onClick={() => onChangeToDo(todo)}>
                {todo.done === true ? "완료" : "취소"}
              </button>
            </div>
          ) : null
        )}
      </div>
      <hr />
      <div>
        <h1>Done</h1>
        {todos.map((todo) =>
          todo.done === false ? (
            <div key={todo.id}>
              <h4>{todo.title}</h4>
              <h6>{todo.toDo}</h6>
              <button onClick={() => onDeleteToDo(todo.id)}>삭제하기</button>
              <button onClick={() => onChangeToDo(todo)}>
                {todo.done === true ? "완료" : "취소"}
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

// component랑 같이 쓸 수 있는지?
const Form = styled.form`
  width: 1200px;
  height: 100px;
  margin: 20px 0 0 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  border-radius: 20px;
  border: 1px solid rgb(232, 232, 232);
  width: 250px;
  height: 25px;
  margin-right: 20px;
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 5px 20px;
  background-color: rgb(232, 232, 232);
  border: 0;
  cursor: pointer;
`;

// const Div = styled.div`
//   width: 1200px;
//   margin-right: 20px;
//   display: flex;
//   flex-wrap: warp;
//   gap: 15px;
// `;

// const H4 = styled.h4`
//   margin: 10px;
//   border: 1px solid rgb(232, 232, 232);
//   width: 300px;
//   height: 70px;
//   border-radius: 15px;
// `;

export default App;
