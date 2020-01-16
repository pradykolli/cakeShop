import React from 'react'
import { buyIceCream } from '../Redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfIceCreams} </h2>
            <button onClick={props.buyIceCream}>BUY ICECREAM</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer) 
