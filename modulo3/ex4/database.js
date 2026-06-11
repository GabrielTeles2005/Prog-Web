const mongoose = require('mongoose');

async function conectarDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDB conectado');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = conectarDB;