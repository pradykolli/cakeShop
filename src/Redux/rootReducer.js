import  cakeReducer  from './Cake/cakeReducer'
import { combineReducers } from 'redux'
import iceCreamReducer from './IceCreams/IceCreamReducers'
import coffeeReducer from './Coffee/CoffeeReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    coffee: coffeeReducer
})
export default rootReducer
 