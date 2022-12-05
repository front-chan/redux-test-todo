// src/pages/home.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, changeToDo } from "../redux/modules/toDos";
import styled, { css } from "styled-components";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
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
    // delete는 id인데 change는 todos 전체 배열을 가지고 오는이유?
    // parameter로 받아오는 값인데 전체 배열을 가지고 오는것인지?
    // >> List의 changeToDo의 parameter값이 props.todo이기 때문
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
            {todos.map((todo) =>
              todo.done === true ? (
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
};

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

export default TodoList;
