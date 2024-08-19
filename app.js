const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=> { console.log('Connected to MongoDB Database') })
.catch((err) => { console.log(`Error connecting to MongoDB Database: ${err}`)});

//View engines
app.set('view engine', 'ejs');
app.set('views', './views');

//Middlewares
app.use(express.static('public'));

//Start server
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});