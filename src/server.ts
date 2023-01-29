import Express from 'express'

const app = Express()

app.get('/', (req, res) => {
  return res.send('ola mundo')
})

app.listen(3000)
