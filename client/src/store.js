import { getAllProductByIdReducer, getAllProductsReducer } from "./reducers/productReducer";
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from '@redux-devtools/extension'

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getAllProductByIdReducer: getAllProductByIdReducer,
    cartReducer: cartReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducer: { cartItems: cartItems }
}

const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(thunk)))

export default store    