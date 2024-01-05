import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

// arrow function which takes state and action as props and updates the state 
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer;