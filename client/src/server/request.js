import axios from "axios"
import routes from "./routes"

export const TIMEOUT_DURATION = 8 * 1000 // 8 seconds

const handleRequest = (action, data, functions) => {
    const { route, method } = routes[action]
	const {
		before, request, success, failure, after,
	} = functions
	const url = `/api/${route}`
	if (before) {
		before()
	}
	if (request) {
		request()
	}
	setTimeout(() => {
        console.log(method, url)
		axios({ method, url, data, timeout: TIMEOUT_DURATION })
			.then((response) => {
                console.log(response)
				if (success) {
					success(response.data.result)
				}
				if (after) {
					after()
				}
			})
			.catch((error) => {
                console.log(error)
				if (error.response) {
					if (failure) {
						failure(error.response)
					}
				} else if (error.code === "ECONNABORTED") {
					if (failure) {
						failure("Timeout")
					}
				} else if (failure) {
					failure()
				}
				if (after) {
					after()
				}
			})
	}, 0)
}

export default handleRequest