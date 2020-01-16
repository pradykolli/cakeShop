import React from 'react'
import { connect } from 'react-redux'
import { buyCoffee } from '../Redux'
function CoffeeContainer(props) {
    return (
        <div>
            <h2>Coffee's Left - {props.numOfCoffees}</h2>
            <button onClick={props.buyCoffee}>BUY COFFEE</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCoffees : state.coffee.numOfCoffees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCoffee: () => dispatch(buyCoffee())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoffeeContainer)
