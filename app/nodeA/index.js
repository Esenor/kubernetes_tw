const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.get('/', async (req, res) => {
  const nodeBResponse = await (await fetch('http://node-b-service')).json()
  res.json({
    app: 'nodeA',
    data: nodeBResponse
  })
})
app.listen(3000, () => {
  console.log('nodeA listening on port 3000!')
})
