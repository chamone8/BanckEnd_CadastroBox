const express = require('express');
const app = express();
const route = require('./Router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(route);

app.listen(80);

