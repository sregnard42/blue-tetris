import { default as types } from "./actionTypes"

const initialState = {
    isLoading: false,
    isConnected: false,
}

const reducer = (state = initialState, action) => {

    let newState = { ...state }

    const { type } = action

    switch (type) {

        case types.CONNECT_REQUEST:
            newState.isLoading = true
            newState.isConnected = false
            break
        case types.CONNECT_SUCCESS:
            newState.isLoading = false
            newState.isConnected = true
            break
        case types.CONNECT_FAILURE:
            newState.isLoading = false
            newState.isConnected = false
            break

        default:
            newState = state
            break
    }

    return newState
}

export default reducer 