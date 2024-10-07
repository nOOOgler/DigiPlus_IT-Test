const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db")
const simRoutes = require('./routes/simRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send("server is running");
})

app.use('/api', simRoutes)
app.listen(process.env.PORT);
