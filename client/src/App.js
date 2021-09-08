import React, { useEffect, useState } from "react"
import logo from './logo.svg'
import './App.css'

const LOADING_MESSAGE = "Loading..."

const App = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
                .then((data) => setData(data))
    }, [])

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{ data ? data.message : LOADING_MESSAGE }</p>
        </header>
        </div>
    )
}

export default App
