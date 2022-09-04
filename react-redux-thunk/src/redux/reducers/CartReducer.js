import { ADD_CART, ERROR_CART } from "../constants/CartContant";

const initialCartState = {
	cartItem: [],
	err: ''
}

export const CartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				cartItem: [...state.cartItem, action.payload]
			}

		case ERROR_CART:
			return {
				...state,
				err: action.payload
			}

		default:
			return state;
	}
}