require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const PORT = process.env.PORT || 3000;

const app = express();

sereverConfig(app)

app.listen(PORT, console.log(`Server is up on ${PORT} port`));
