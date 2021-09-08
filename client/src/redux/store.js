import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer"

const configureStore = (initialState) => {
	const store = createStore(reducer, initialState, applyMiddleware(thunk))
	return store
}

export default configureStore