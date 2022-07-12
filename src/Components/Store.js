
import { configureStore, applyMiddleware } from 'redux'
import orderCake from "./Action"




//hold application state
export const store = configureStore( applyMiddleware )

//allow access to state via getState()
console.log('Initial state', store.getState())

//register listener via subscribe
const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

//allow state to be updated dispatch(action)
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
