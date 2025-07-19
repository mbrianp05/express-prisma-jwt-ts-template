import cors from 'cors'
import express from 'express'

const app = express()
const port = process.env.PORT ?? '5090'

app.use(
  cors({
    credentials: true,
    origin: '*',
  }),
)

app.get('/', (_, res) => {
  res.send('Hello World!')
  console.log('Response sent')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
