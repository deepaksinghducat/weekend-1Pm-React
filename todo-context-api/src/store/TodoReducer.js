let todos = [];

export const TodoReducer = (state,action) => {
	switch (action.type) {
		case "add-todo" :
			todos = [...state.todos,action.payload];

			localStorage.setItem('todo', JSON.stringify(todos));
			
			return {
				...state,
				todos
			}

		case "delete-todo" : 
			state.todos.splice(action.payload, 1);
			todos =  [...state.todos];
		
			localStorage.setItem('todo', JSON.stringify(todos));

			return {
				...state,
				todos
			}
		
		default : 
			return state;
	}
}