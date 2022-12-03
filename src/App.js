import React, { useState } from "react";
import "./App.css";
// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "./redux/modules/todo";
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
  // console.log(do)
  // console.log(todos);
  const dispatch = useDispatch();

  // function onClickAddHandler() {
  //   dispatch(addToDo(title));
  //   // const newToDo = {
  //   //   id: toDos.length + 1,
  //   //   title,
  //   // };
  //   // setToDos([...toDos, newToDo]);
  // }

  function onSubmit(e) {
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

  // function onChangeHandler(event) {
  //   setTitle(event.target.value);
  // }
  // console.log(title);

  return (
    <div>
      <Form onSubmit={onSubmit}>
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
        {todos.map((todo) => (
          <Div key={todo.id}>
            <h4>{todo.title}</h4>
            <h6>{todo.toDo}</h6>
          </Div>
        ))}
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
`;

const Div = styled.div`
  width: 1200px;
  margin-right: 20px;
  display: flex;
  flex-wrap: warp;
  gap: 15px;
`;

// const H4 = styled.h4`
//   margin: 10px;
//   border: 1px solid rgb(232, 232, 232);
//   width: 300px;
//   height: 70px;
//   border-radius: 15px;
// `;

export default App;
