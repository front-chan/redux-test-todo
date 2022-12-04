import styled, { css } from "styled-components";

function List(props) {
  return (
    <StDiv key={props.todo.id}>
      <a href="https://www.naver.com">상세보기</a>
      <StH4>{props.todo.title}</StH4>
      <StH6>{props.todo.toDo}</StH6>
      <div>
        <StButton delete onClick={() => props.onDeleteToDo(props.todo.id)}>
          삭제하기
        </StButton>
        <StButton complete onClick={() => props.onChangeToDo(props.todo)}>
          {props.todo.done === true ? "완료" : "취소"}
        </StButton>
      </div>
    </StDiv>
  );
}

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
export default List;
