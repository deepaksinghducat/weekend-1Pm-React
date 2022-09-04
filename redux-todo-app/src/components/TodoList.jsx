import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul className="list-group mt-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {index + 1} {todo}
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ float: "right" }}
              onClick={() =>  dispatch({type: 'delete-todo', payload: index})}
            ></i>
          </li>
        ))
      ) : (
        <li className="list-group-item">No Todo</li>
      )}
    </ul>
  );
}

export default TodoList;
