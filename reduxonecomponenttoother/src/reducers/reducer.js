const reducer = (state = { say: 'How are u' }, action) => {

    switch (action.type) {

        case 'ADD_ITEM':
            return { say: 'i AM aDDED' };
        default:
            return state;
    }

};

export default reducer;