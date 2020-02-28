const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.json({
    app: 'nodeB'
  })
})
app.listen(3000, function () {
  console.log('nodeB listening on port 3000!')
})
