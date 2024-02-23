// src/dbConfig/dbConfig.ts

import mongoose from 'mongoose';

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB conectado com sucesso.");
        })

        connection.on('error', (err) => {
            console.log('MongoDB com erro na conexão...' + err);
            process.exit();
       })
    } catch (error) {
        console.log(error);
    }
}