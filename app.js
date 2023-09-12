const express = require('express');
const userRoutes = require('./routes/userRoutes')
const db = require('./config/db');


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", userRoutes)

const PORT = 5000 || process.env.PORT;


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Homepage use /api in URL"
    })
})



app.listen(PORT, (req, res) => {
    console.log('  APP IS STARTED 👱‍♀️')
})