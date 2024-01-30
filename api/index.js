const express = require('express');
const cors = require('cors');
const user = require('../controllers/user');
const otp = require('../controllers/otp');
const question = require('../controllers/question');
const reply = require('../controllers/reply');
const history = require('../controllers/workingHistory');
const app = express();

app.use(cors({
    origin: '*',
    methods: [
        'GET',
        'PUT',
        'POST',
        'DELETE'
    ]
}));

app.use(express.json());

app.use('/user' ,(req, res) => {
    user(req, res);
});

app.use('/otp', (req, res) =>{
    otp(req, res);
});

app.use('/question', (req, res) => {
    question(req, res);
});

app.use('/history', (req, res) => {
    history(req, res);
});

app.use('/reply',(req, res) => {
    reply(req, res);
});

app.listen(3001, () => {
    console.log('Server started at port 3001');
})