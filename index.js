
import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config';
import { bookingRouter } from './controllers/routes/all-routes.js';

// Connect database
await mongoose.connect(process.env.MONGO_URI);


const app = express();


const PORT = 7070

app.use(bookingRouter)
app.use(express.json())

app.listen(PORT,() => {
    console.log('Server is  listening on ${PORT}')
})