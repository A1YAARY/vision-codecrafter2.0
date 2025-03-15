const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json());


//routes
const userRoutes = require('./routes/userRoutes');
const priceRoutes = require("./routes/priceRoutes")


const port = 3000
app.use("/api/users",userRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/price",priceRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})