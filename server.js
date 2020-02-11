const express = require('express');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const controller = require('./ctrl');
require('dotenv').config();
const app = express();


massive(process.env.DATABASE_URL)
    .then(db => {
        app.set('db', db);
    })

app.use(session({
    secret: 'keyboard cat',
    expires: 864000000,
    maxAge: 864000000,
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.cors(({ credentials: true, origin: '*' }));


// endpoints





app.listen(8080, () => console.log('listening on port 8080'));