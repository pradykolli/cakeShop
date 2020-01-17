import React from 'react'
import { useState } from 'react'
import { buyIceCream } from '../Redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h2>Number of Icecreams - {props.numOfIceCreams} </h2>
            <input type = "text" value={number} onChange={e => setnumber(e.target.value)}></input>
            <button onClick={() => props.buyIceCream(number)}>BUY {number} ICECREAM</button>
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
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer) 
