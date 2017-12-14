const express = require('express');
const app = express();
const PORT = 3000;


app.listen(PORT, console.log('app is listening on...', PORT));

app.get ('/', (req, res) => {
  res.send('hello world');
})
