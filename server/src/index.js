const express = require('express');
const cors = require('cors')
const postRouter = require('./routes.js');

const app = express()

app.use(cors())
app.use(express.json())

app.use(postRouter)

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started')
})