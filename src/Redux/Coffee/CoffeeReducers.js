import { BUY_COFFEE } from './CoffeeTypes'

const initialState = {
    numOfCoffees : 50
}

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COFFEE: return {
            ...state,
            numOfCoffees : state.numOfCoffees - 1
        }
        default: return state
            
    }
} 
export default coffeeReducer