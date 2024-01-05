import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";
const IceCreamContainers = () => {
    const numOfIcecream = useSelector(state => state.icecream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Icecream 🍦 - {numOfIcecream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainers