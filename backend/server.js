const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const database_url="mongodb+srv://y22cai037ciet:test@crackers.hmlne.mongodb.net/?retryWrites=true&w=majority&appName=Crackers"



// Routes
app.use('/api', productRoutes);
app.get('/',(req,res)=>{
    res.send("Backend running perfectly")
})
// Start the server
const PORT = process.env.PORT||5000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
mongoose.connect(database_url)
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))