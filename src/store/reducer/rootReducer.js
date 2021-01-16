import {combineReducers} from 'redux'
import productReducer from './productReducer'
import postReducer from './postReducer'
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
    products:productReducer,
    posts:postReducer,
    productBasket:basketReducer
})

export default rootReducer