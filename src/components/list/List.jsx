import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div>
      <StDiv key={props.todo.id}>
        {/* <a href="https://www.naver.com">상세보기</a> */}
        <Link to={`/lists/${props.todo.id}`}>
          <StSpan>상세보기</StSpan>
        </Link>
        <StH4>{props.todo.title}</StH4>
        <StH6>{props.todo.toDo}</StH6>
        <div>
          <StButton delete onClick={() => props.onDeleteToDo(props.todo.id)}>
            삭제하기
          </StButton>
          <StButton complete onClick={() => props.onChangeToDo(props.todo)}>
            {props.todo.done ? "완료" : "취소"}
          </StButton>
        </div>
      </StDiv>
    </div>
  );
};

const StH4 = styled.h4`
  font-size: 1.8rem;
  margin: 10px;
`;

const StH6 = styled.h6`
  font-size: 1.15rem;
  margin: 10px;
`;

const StButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  width: 130px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  ${(props) =>
    props.delete &&
    css`
      border: 2px solid red;
    `};
  ${(props) =>
    props.complete &&
    css`
      border: 2px solid green;
    `};
`;

const StDiv = styled.div`
  width: 330px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 5px solid rgb(1, 87, 65);
  border-radius: 10px;
`;

const StSpan = styled.span`
  color: black;
  cursor: pointer;
`;

export default List;

/*
import React from "react";
import { Link } from "react-router-dom";

const data = [
  { id: 1, todo: "리액트 배우기" },
  { id: 2, todo: "노드 배우기" },
  { id: 3, todo: "자바스크립트 배우기" },
  { id: 4, todo: "파이어 베이스 배우기" },
  { id: 5, todo: "넥스트 배우기" },
  { id: 6, todo: "HTTP 프로토콜 배우기" },
];

function Works() {
  return (
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/lists/${work.id}`}>
              <span style={{ cursor: "pointer" }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
*/
