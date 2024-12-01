const express = require('express')
const {mongoose, Model } = require('../db/db.js');

// You can now use `mongoose` and `Model` as needed.
console.log(mongoose.connection.readyState); 

const app = express();
const PORT = 3000

app.listen(PORT, () => {
  console.log(`app is listening onn ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/', (req, res) => {
  res.send({
    msg: "post server is hit"
  })
})