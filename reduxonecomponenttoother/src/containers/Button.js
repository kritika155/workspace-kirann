import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/action'

let Button = ({ add, whatsUp}) => ( 
    <div >
        <h1>Component 1: {whatsUp}</h1>
        <button onClick={add}>Item Add</button>
    </div>
)

const mapStateToProps = (state) => ({
    whatsUp: state.say,
    stateObject: state
  })

const mapDispatchToProps = (dispatch) => ({
    add: () => { dispatch(addItem()) }
})


Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default Button;