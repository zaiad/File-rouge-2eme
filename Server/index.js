const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const authRoutes = require('./routes/authRoute/authRoute')
const managerRoutes = require('./routes/userRoute/managerRoute')


// Connection to database
require('./config/dbConfig')
require('./models')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Routers
app.use("/api/auth", authRoutes);
app.use("/manager", managerRoutes);

app.all("*", (req, res) => {
    res.send("Page not found");
});


// Port
app.listen(process.env.PORT || 2001, () =>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
);

module.exports = app;