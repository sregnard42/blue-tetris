import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { bindActionCreators } from "redux"
import * as actions from "redux/actions"
import { connect } from "react-redux"

import "./ServerStatus.css"

const text = {
    STATUS          : "Server status : ",
    IS_LOADING      : "loading...",
    IS_ONLINE       : "online",
    IS_OFFLINE      : "offline",
}

const getString = (isLoading, isConnected) => (
    isLoading ? text.IS_LOADING : isConnected ? text.IS_ONLINE : text.IS_OFFLINE
)

let ServerStatus = ({ actions, isLoading, isConnected }) => {

    const [status, setStatus] = useState()

    useEffect(() => {
        actions.connectToServer()
    }, [actions])

    useEffect(() => {
        setStatus(getString(isLoading, isConnected))
    }, [isLoading, isConnected])

    return (
        <div className="serverStatus">
            { text.STATUS + status }
        </div>
    )
}

const mapStateToProps = (reducer) => {
    const { isLoading, isConnected } = reducer
    return { isLoading, isConnected }
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...actions,
    }, dispatch),
})
ServerStatus = connect(mapStateToProps, mapDispatchToProps)(ServerStatus)

ServerStatus.propTypes = {
    isLoading: PropTypes.bool,
    isConnected: PropTypes.bool,
}
ServerStatus.defaultProps = {
    isLoading: false,
    isConnected: false,
}

export default ServerStatus