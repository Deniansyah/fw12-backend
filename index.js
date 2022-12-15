const express = require("express")
const cors = require("cors")
const { use } = require("./src/routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use("/assets/uploads", express.static("uploads/"))

app.use('/', require('./src/routes'))

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Beckend is running well",
  })
})

app.listen(8888, () => {
  console.log("App listening to port 8888")
})

