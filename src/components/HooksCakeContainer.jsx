import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux";
//useSelector is a hook by react redux that acts as a close equivalent to mapStateToProps function
// helps get hold of any state in the redux store

//useDispatch is a hook by react redux that acts as a close equivalent to mapDispatchToProps function
// allows us to dispatch Actions
//useDispatch returns a refernece to the dispatch function from redux store
const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Cake 🎂 Using Hooks - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;