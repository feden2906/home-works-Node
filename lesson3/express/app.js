const express = require('express');

const { port } = require('./config/variables');

const app = express();

app.use(express.urlencoded({ extended: true }));

const { authRouter, userRouter } = require('./routes');

app.get('/', (req, res) => {
  res.status(404).end('not found');
});

app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`server is loading ${port}`);
});
