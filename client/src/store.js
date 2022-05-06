import { getAllProductByIdReducer, getAllProductsReducer } from "./reducers/productReducer";
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from '@redux-devtools/extension'
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getAllProductByIdReducer: getAllProductByIdReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: { cartItems: cartItems },
    loginUserReducer: { currentUser: currentUser }
}

const store = createStore(rootReducer, initialState,
    composeEnhancers(applyMiddleware(thunk)))

export default store    