import { default as types } from "redux/actionTypes"
import handleRequest from "server/request"

export const connectToServer = () => (
    (dispatch, getState) => {
        const { isLoading } = getState()
        if (isLoading === true) {
            return
        }
        const request = () => {
            dispatch({
                type: types.CONNECT_REQUEST,
            })
        }
        const success = () => {
            dispatch({
                type: types.CONNECT_SUCCESS,
            })
        }
        const failure = () => {
            dispatch({
                type: types.CONNECT_FAILURE,
            })
        }
        handleRequest(
            types.CONNECT, 
            null,
            { request, success, failure },
        )
    }
)