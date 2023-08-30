const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const path = require('path')
const morgan = require('morgan')
require('./mail/transporter')
require('dotenv').config();

const categoryRoutes = require('./routes/category')
const petRoutes = require('./routes/pet')
const adoptionRoutes = require('./routes/adoption')
const confirmationRoutes=require('./routes/confirmation')
const contactUsRoutes=require('./routes/contactus')
const app=express();

app.use(cors());

app.use('//public',express.static(path.join(__dirname,'public')))


app.use(express.json());

app.use(morgan('tiny'));

//routes
app.use('/api/category',categoryRoutes);
app.use('/api/pet',petRoutes);
app.use('/api/adoption',adoptionRoutes);
app.use('/confirmation',confirmationRoutes);
app.use('/contactUs',contactUsRoutes);


const mongoUri=process.env.DATABASE_URL.toString();

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
});

mongoose.connection.on('connected',()=>{
    console.log('connected to Mongodb...');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error while connecting to mongodb',err);
})

app.listen(4000,()=>{
    console.log('app is running on PORT 4000')
})