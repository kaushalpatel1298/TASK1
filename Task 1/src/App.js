const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello World How Are you')
})


app.use('/api/users', userRouter);


module.exports = app;