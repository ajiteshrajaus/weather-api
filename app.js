const express = require('express');
const app = express();
const mongoose = require('mongoose');
const forecastRoutes = require('./routes/forecasts');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
app.get('/', (req,res) => {
     res.send('Running');
 });

app.use('/forecasts', forecastRoutes );
app.use('/login', authRoutes );

mongoose.connect(process.env.DB_CONNECTION,
                {useNewUrlParser: true, useUnifiedTopology: true},
                ()=> console.log('connected')
              );

app.listen(3000);
