const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const routers = require('./routes/index.js');
const database = require('./config/database.js');

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errors());

app.listen(port, function () {
	console.log('Server is runing... http://localhost:' + port);
});

database.connect();
routers(app);
