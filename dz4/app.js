const express = require('express');
const mongoose = require('mongoose');

const { variables: { port } } = require('./config');
const { carRouter, userRouter } = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/apr-2021');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  res.json('pong');
});

app.use('/users', userRouter);
app.use('/cars', carRouter);

app.use('*', _notFoundError);
app.use(_mainErrorHandler);

app.listen(port, () => {
  console.log('port is running');
});

function _notFoundError(err, req, res, next) {
  next({
    status: err.status || 404,
    message: err.message || 'not found'
  });
}

// eslint-disable-next-line no-unused-vars
function _mainErrorHandler(err, req, res, next) {
  res.status(err.status).json(err.message);
}
