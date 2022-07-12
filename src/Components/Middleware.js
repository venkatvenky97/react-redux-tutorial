//extend redux with custom function
//dispatching the action and moment reaches the reducer
//use middleware for logging, error reporting, making asynchronous request

import { configureStore , applyMiddleware } from 'redux'
import reducer from "./Reducer"


// Logging Middleware
const logging = ( store ) => {
    return ( next ) => {
        return ( action ) => {
            console.log( "[inside logging],  action = ", action );
            console.log( "[inside logging],  State before next = ", store.getState() );
            return next;
            
        };
    }
};

export const store = configureStore ( reducer, applyMiddleware(logging))

