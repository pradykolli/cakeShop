import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../Redux'

function HookContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Hooks</h1>
            <h2>Number of cakes - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>BUY CAKE</button>
        </div>
    )
}

export default HookContainer
