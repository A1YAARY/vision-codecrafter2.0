const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//routes
const userRoutes = require('./routes/userRoutes');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})