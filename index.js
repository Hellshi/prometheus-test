const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); 

const Post = require('./routes/Post')

const app = express(); 
app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 5000

app.listen(PORT, () => 
    {console.log(`O administrador está online no camarote ${PORT}`)})



app.use('/', Post)

