const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrls = require('./routes/routes');
const accountRouterUrls = require('./routes/account-routes')
const cors = require('cors');

dotenv.config();

// DB Connection
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true})
db.once('open', () => {
    console.log("DB Connection Sucess")
})
db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

// Middleware Inits
app.use(express.json()) // Body parser
app.use(cors()) // To make sure there arent any cors issues
app.use('/solar/v2',routerUrls)
app.use('/account', accountRouterUrls)
// Listen
app.listen(4001, () => {
    console.log("Express Server up and running on port 4001.")
})