import { ERROR_PRODUCT, LOAD_PRODUCT } from "../constants/ProductContant";

const initialProductState = {
	products: [],
	err: ''
}

export const ProductReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case LOAD_PRODUCT:
			return {
				...state,
				products: action.payload
			}

		case ERROR_PRODUCT:
			return {
				...state,
				err: action.payload
			}

		default:
			return state;
	}
}