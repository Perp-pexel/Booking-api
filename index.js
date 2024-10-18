
import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config';
import { bookingRouter } from './routes/all-routes.js';
import userRouter from './routes/user.js';
import cors from 'cors'

// Connect database
await mongoose.connect(process.env.MONGO_URI);


const app = express();


const PORT = 7070


app.use(cors())
app.use(express.json())
app.use(bookingRouter)


app.listen(PORT,() => {
    console.log('Server is  listening on port 7070')
})