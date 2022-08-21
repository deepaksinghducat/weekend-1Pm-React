import React from 'react'
import { useContext } from 'react'
import TodoContext from '../store/store'

function TodoList(props) {

  const store = useContext(TodoContext);

  console.log(store);

  return (
    <ul className="list-group mt-4">
      {
        store.todos.length > 0 ? store.todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {index + 1} {todo}
            <i 
              className="fa fa-times" 
              aria-hidden="true" 
              style={{ float: "right" }} 
              onClick={() => store.deleteTodo(index)}
            ></i>
          </li>
        )) : (<li className="list-group-item">No Todo</li>)
      }
    </ul>
  )
}

export default TodoList