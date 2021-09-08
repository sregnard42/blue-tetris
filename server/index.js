const express = require("express")
const path = require("path")
const port = process.env.PORT || 3001
const app = express()
const buildPath = path.resolve(__dirname, "../client/build")

// Have Node serve the files for our built React app
app.use(express.static(buildPath))

// Handle GET requests to /api route
app.get("/api/connect", (req, res) => {
    console.log("Server pinged")

    // Remove timeout later on
    setTimeout(() => {
        res.json({})
    }, 2000)
})

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(buildPath, "index.html"))
})

app.listen(port, () => {
    console.log(`Server online and listening on ${ port }`)
})