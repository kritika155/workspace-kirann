
const reducer = (state = {counter:0,say:'How are u'}, action) => {

  switch (action.type) {
    case 'HELLO_REACT':
      return {  say : 'Hello World Redux'  };
    case 'ADD_ITEM':
    return {say : 'i AM aDDED' };
    case 'DELETE_ITEM':
    return {say:'I am Deleted'};

    case 'INCREMENT':
    return {...state,say:state.counter++};

    case 'DECREMENT':
    return {...state,say:state.counter--};

    default:
      return state;
  }
  
};

export default reducer;