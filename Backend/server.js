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

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
