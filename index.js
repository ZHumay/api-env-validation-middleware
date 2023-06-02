const express = require('express');
const {userRoutes}=require('./routes/userRoutes')
const { default: mongoose } = require('mongoose');
const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())

app.use('/api/users', userRoutes)
app.listen(3003);