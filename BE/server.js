require('dotenv').config();

const express  = require('express');
const cors = require('cors');
const app = express();
require('./src/config/db');

const PORT = process.env.PORT;                                                    

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Server is running...');
})

const authRoutes = require('./src/routes/auth.routes');
app.use('/api/auth',authRoutes);

const categoryRoutes = require('./src/routes/category.routes');
app.use('/api/category' , categoryRoutes);



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})

