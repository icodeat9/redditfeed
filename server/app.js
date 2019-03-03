const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()

app.use(morgan('combined'))
app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res, next) => {
  request("https://www.reddit.com/r/Showerthoughts/top.json", (error, response, body) => {
  body = JSON.parse(body)
  res.send(body.data.children)
  })

})

app.listen(8081, console.log("App running"))
