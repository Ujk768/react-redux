import { BUY_CAKE } from "./cakeTypes"

// Action Creator-> function which returns an object with type property
export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}