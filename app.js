const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send('Hello express!')
})

app.get('/weather', (req, res) => {
 // Provide an object to send as JSON
 res.send({
 forecast: 'It is snowing',
 location: 'Philadelphia'
 })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
