const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.json({
    app: 'nodeB',
    content: 'String data from container node-b in pod-node-b from service-node-b'
  })
})
app.listen(3000, function () {
  console.log('nodeB listening on port 3000!')
})
