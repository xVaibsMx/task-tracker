const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')

env.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

const uri = process.env.URI
mongoose.connect(uri)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
