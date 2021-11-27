const express = require('express');

const cors = require('./app/middlewares/cors');
const error = require('./app/middlewares/errorHandle')
require('express-async-errors')

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors)
app.use(routes);
app.use(error)

app.listen(3001, () => console.log('Server started at http://localhost:3001'));