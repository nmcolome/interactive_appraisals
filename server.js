const express = require('express');
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.resolve(__dirname, "./build")))
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(app.get('port'), () => {
  console.log('App is running')
})