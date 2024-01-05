import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

// Access redux store in your component - gets redux state as a parameter used to retrieve state properties
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// gets the dispatch method as parameter and allows us to map Action Creators to Props in the component
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number Of Cakes 🎂 - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
// works through connect function of Redux -> Hooks allow us to do this without the conect method
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
