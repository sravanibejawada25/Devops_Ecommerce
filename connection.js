// db/connection.js
const mongoose = require('mongoose');

// Replace 'ecommerce' with your database name
const dbURI = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;
