import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyChocolate } from "../redux";

const ChocolateContainer = () => {
    const numOfChocolates = useSelector(state => state.chocolate.numOfChocolates)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Chocolates 🍫 - {numOfChocolates}</h2>
            <button onClick={() => dispatch(buyChocolate())}>Buy Chocolates</button>
        </div>
    )
}

export default ChocolateContainer