const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')

dotenv.config();


const app = express();

app.use(cors());
app.use(morgan('tiny'));

// TO DO CONFIGuRE APP
app.post('/login', (req, res) => {
    res.send('Hello, Dawson');
});


app.listen(8080);