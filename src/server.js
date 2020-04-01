const express = require('express');
const app = express();
const route = require('./Router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const server = require('http').Server(app); // const server = http.Server(app)  é a mesma coisa



app.use(route);

server.listen(process.env.PORT || 80);

