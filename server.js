const express = require('express')
const app = express();
const dotenv = require("dotenv");
const prisma = require("./database")

dotenv.config({
    path : "HACK_JMI_MAIN/.env"
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

const port = 4000;

app.listen(4000, function () {
    console.log('Example app listening on port ' + port + '!');
  });