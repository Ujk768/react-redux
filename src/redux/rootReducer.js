import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import chocolateReducer from './chocolate/chocolateReducer'
import { userReducer } from './users/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    chocolate: chocolateReducer,
    usersData: userReducer

})

export default rootReducer