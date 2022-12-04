import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, changeToDo } from "./redux/modules/todo";
import styled, { css } from "styled-components";
import Form from "./components/form/Form";
import List from "./components/list/List";

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
        id: Math.floor(Math.random() * 100000),
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
    <StDiv app>
      <Form
        title={title}
        toDo={toDo}
        onSubmit={onSubmit}
        setTitle={setTitle}
        setToDo={setToDo}
      ></Form>
      <StMain>
        <section>
          <h1>Woring...🔥</h1>
          <StDiv section>
            {todos.map(
              (todo) =>
                todo.done === true ? (
                  <List
                    key={todo.id}
                    todo={todo}
                    onDeleteToDo={onDeleteToDo}
                    onChangeToDo={onChangeToDo}
                  ></List>
                ) : null
              /*<div key={todo.id}>
              <a href="https://www.naver.com">상세보기</a>
              <h4>{todo.title}</h4>
              <h6>{todo.toDo}</h6>
              <button onClick={() => onDeleteToDo(todo.id)}>삭제하기</button>
              <button onClick={() => onChangeToDo(todo)}>
                {todo.done === true ? "완료" : "취소"}
              </button>
            </div>*/
            )}
          </StDiv>
        </section>
        <section>
          <h1>Done..!🎉</h1>
          <StDiv section>
            {todos.map((todo) =>
              todo.done === false ? (
                <List
                  key={todo.id}
                  todo={todo}
                  onDeleteToDo={onDeleteToDo}
                  onChangeToDo={onChangeToDo}
                ></List>
              ) : null
            )}
          </StDiv>
        </section>
      </StMain>
    </StDiv>
  );
}

// component랑 같이 쓸 수 있는지?

const StDiv = styled.div`
  ${(props) =>
    props.app &&
    css`
      max-width: 1200px;
      width: 95%;
      margin: 20px auto;
    `};
  ${(props) =>
    props.section &&
    css`
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;
    `};
`;

const StMain = styled.main`
  margin-left: 30px;
`;

// const H4 = styled.h4`
//   margin: 10px;
//   border: 1px solid rgb(232, 232, 232);
//   width: 300px;
//   height: 70px;
//   border-radius: 15px;
// `;

export default App;
