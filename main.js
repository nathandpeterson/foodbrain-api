const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require('./db/db.js')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')
if (!process.env.NODE_ENV) app.use(morgan('dev'))

const cors = require('cors')
app.use(cors())
app.disable('x-powered-by')

const router = require('./router/router.js')
app.use('/', router)

app.use((req, res, next) => {
  const status = 404
  const message = `Could not find route matching: ${req.method} ${req.path}`
  next({ status, message })
})

app.use((err, req, res, next) => {
  if (!process.env.NODE_ENV) console.log(err)
  const status = err.status || 500
  const message = err.message || 'Something went wrong!'
  res.status(status).json({ error: { message } })
})


const listener = () => console.log(`----- :) Listening on port ${port}`)
app.listen(port, listener)
