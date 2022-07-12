const CAKE_ORDERED = 'CAKE_ORDERED'     // create base reducer
                                        //reducer have the current state and action (what action we have to take)
const initialState = {
    numOfCakes : 10,
}
 
//(previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
            default:
                return state
    }
}

export default reducer;