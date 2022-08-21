import React, { useEffect, useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

const initalValues = {
	todos: localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [],
	addTodo: () => { },
	deleteTodo: () => { }
}

const TodoContext = React.createContext(initalValues);

export const TodoContextProvider = (props) => {

	const [todoReduce, DispatchReducer] = useReducer(TodoReducer, initalValues);

	const addTodo = (todo) => {
		DispatchReducer({ type: 'add-todo', payload: todo });
	}

	const deleteTodo = (index) => {
		DispatchReducer({ type: 'delete-todo', payload: index });
	}

	return <TodoContext.Provider value={{
		...initalValues,
		todos: todoReduce.todos,
		addTodo,
		deleteTodo,
	}
	}>{props.children}</TodoContext.Provider>
}

export default TodoContext;