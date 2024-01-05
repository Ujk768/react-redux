import { BUY_CHOCOLATE } from "./chocolateActionType";

const initialState = {
    numOfChocolates: 50
}
const chocolateReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE: return {
            ...state,
            numOfChocolates: state.numOfChocolates - 1
        }
        default: return state
    }
}

export default chocolateReducer