const express = require('express')
const helmet = require("helmet");
const app = express();
app.set('view engine', 'pug')
app.use(helmet());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/pug', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});