const mongoose = require('mongoose');

async function connect() {
    const mongoString = process.env.DATABASE_URL;

    try {
        await mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error: ', err);
        process.exit(1);
    }
}

module.exports = { connect };
