const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/authRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');
const PORT = process.env.PORT || 3000;


//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => { console.log('Connected to MongoDB Database') })
.catch((err) => { console.log(`Error connecting to database: ${err}`) });

//View engines
app.set('view engine', 'ejs');
app.set('views', './views');

//Middlewares
app.use(express.static('public'));

app.use((err, res, req, next) =>{
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
    next();
});

//Routes
app.use('/', authRoutes);
app.use('/', studentRoutes);


//Start server
app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`);
});