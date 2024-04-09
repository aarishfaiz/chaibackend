console.log('Chai Or Code')

const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Just LoggedIn')
  })

  app.get("/aarish", (req, res) => {
    res.json({
        messages: "Checkout the json Data",
    })
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})