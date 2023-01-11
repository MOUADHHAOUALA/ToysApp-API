const express  = require('express');
const morgan = require('morgan');

const toyRouter = require('./routes/toyRoutes');


const app = express()