require('dotenv').config();
const express = require('express');
const { connect } = require('./database/db');
const port = process.env.PORT || 8010;

const app = express();
app.use(express.json());

const routes = require('./route/routes');
app.use('', routes)

async function startServer() {
    await connect();

    app.listen(port, () => {
        console.log(`Server Started at ${port}`);
    });
}

startServer();
