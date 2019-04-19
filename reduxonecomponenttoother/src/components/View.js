import React from 'react'
import { connect } from 'react-redux'

let View = ({ whatsUp }) => (
    <div >
        <h1 >Component 2: {whatsUp}</h1>
    </div>
)

const mapStateToProps = (state) => ({
    whatsUp: state.say,
    stateObject: state
})

View = connect(
    mapStateToProps,
)(View)

export default View;