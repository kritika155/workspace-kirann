import React from 'react'
import { connect } from 'react-redux'
import { sayHello,addItem,deleteItem } from '../actions'

let Button = ({ whatsUp, stateObject, saySomething,add,deletei }) => (
  <div >
    {/* <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2> */}
        <button onClick={saySomething}>Hello React</button>

    <button onClick={add}>Add Item</button>
    <button onClick={deletei}>Delete Item</button>

    {/* <h1>{stateObject.Count}</h1> */}
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  add: () => { dispatch(addItem())},
  deletei: () => { dispatch(deleteItem())}

})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;