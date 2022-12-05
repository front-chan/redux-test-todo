import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

function Todo() {
  const param = useParams();
  const todos = useSelector((state) => state.toDo.toDos);
  console.log(todos);
  const todoIdList = todos.find((todo) => todo.id === parseInt(param.id));
  console.log(todoIdList);
  return (
    <StDiv todo>
      {/* {todoIdList.map((todo) => {
        return (
          <div> */}
      <StDiv card>
        <div>
          <StDiv cardId>
            <h3>id: {todoIdList.id}</h3>
            <Link to={`/lists`}>
              <StButton>이전으로</StButton>
            </Link>
          </StDiv>
          <StH1>{todoIdList.title}</StH1>
          <StP>{todoIdList.toDo}</StP>
        </div>
      </StDiv>
      {/* </div>
        );
      })} */}
    </StDiv>
  );
}

const StDiv = styled.div`
  ${(props) =>
    props.todo &&
    css`
      border: 2px solid rgb(238, 238, 238);
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  ${(props) =>
    props.card &&
    css`
      width: 600px;
      height: 400px;
      border: 1px solid rgb(201, 201, 201);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
    ${(props) =>
    props.cardId &&
    css`
      display: flex;
      height: 80px;
      justify-content: space-between;
      padding: 0px 24px;
      align-items: center;
    `}
`;

const StButton = styled.button`
  border: 1px solid rgb(201, 201, 201);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const StH1 = styled.h1`
  padding: 0px 24px;
`;

const StP = styled.p`
  padding: 0px 24px;
`;

export default Todo;
