const express = require("express")
const app = express()
const cors = require("cors")
const API_Router = require("./API_Router")
const PORT = process.env.PORT | 4000


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
    
app.get("/",(req,res) => {
    res.send("<h2>Welcome To the SoftDB API, Plase Make Sure You Are Sending Your Request To The /api/... Endpoint.<h2>")
})

app.use("/api",API_Router)

app.listen("4000",() => {
    console.log("Server is running on : http://localhost:4000");
})