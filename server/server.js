import express from 'express'
import cors from 'cors'

const server = express()
const PORT = 5000

server.use(cors())

server.get('/', (req, res) => {
  res.send('Serving Running!')
})

server.listen(PORT, () => {
  console.log('server running on port http://localhost:' + PORT)
})
