import Redux from 'redux'
import createStore from "redux"
// state
const initialState = {
    loading: false,
    users: [],
    error: '',
}

// Action
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'



const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
       
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
       
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
       
    }
}




//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
               ...state,
               loading: true
            }
            case  FETCH_USERS_SUCCEEDED
            return {
               loading: false,
               users: action.payload,
               error: ''
            }
            case FETCH_USERS_FAILED:
                return {
                  loading: false,
                  users: [],
                  error: action.payload,
                }
    }
}

const store = createStore(reducer)


  