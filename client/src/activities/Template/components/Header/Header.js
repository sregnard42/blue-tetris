import React from "react"

import "./Header.css"

import ServerStatus from "./components/ServerStatus/ServerStatus"

const Header = () => {
    return (
        <div className="header">
            <ServerStatus />
        </div>
    )
}

export default Header