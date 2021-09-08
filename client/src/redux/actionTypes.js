// Actions client-side only
// const createActionType = (actionType) => ({ [actionType]: actionType })

// Actions interacting with server
const createAsyncActionTypes = (prefix) => {
	const suffixes = ["REQUEST", "SUCCESS", "FAILURE"]
	const actionTypes = {}
	actionTypes[prefix] = prefix
	suffixes.forEach((suffix) => {
		const string = `${prefix}_${suffix}`
		actionTypes[string] = string
	})
	return actionTypes
}

const actionTypes = {
    ...createAsyncActionTypes("CONNECT"),
}

console.log(actionTypes)

export default actionTypes