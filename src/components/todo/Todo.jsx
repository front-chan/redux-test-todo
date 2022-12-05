import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Todo() {
  const param = useParams();
  const todos = useSelector((state) => state.toDo.toDos);
  console.log(todos);
  const todoIdList = todos.find((todo) => todo.id === parseInt(param.id));
  console.log(todoIdList);
  return (
    <div>
      {/* {todoIdList.map((todo) => {
        return (
          <div> */}
      <div>
        <h3>id: {todoIdList.id}</h3>
        <Link to={`/lists`}>
          <button style={{ cursor: "pointer" }}>이전으로</button>
        </Link>
      </div>
      <h1>{todoIdList.title}</h1>
      <h2>{todoIdList.toDo}</h2>
      {/* </div>
        );
      })} */}
    </div>
  );
}

export default Todo;
