import { LOAD_PRODUCT,ERROR_PRODUCT } from "../constants/ProductContant"
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	try {

		const  { data} = await axios.get( 'https://fakestoreapi.com/products');
		
		dispatch({type : LOAD_PRODUCT, payload: data});

	}catch(e) {
		dispatch({type : ERROR_PRODUCT, payload: e.message});
	}
}