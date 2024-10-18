// import express from 'express'

// const bookingRouter = express.Router()

import { Router} from "express";
import { getAllBookings, getOneBooking, postBooking, updateBooking, deleteBooking } from "../controllers/booking-controllers.js";


export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)

bookingRouter.get('/bookings/:id', getOneBooking)

bookingRouter.post('/bookings', postBooking)

bookingRouter.patch('/bookings/:id', updateBooking)

bookingRouter.delete('/bookings/:id', deleteBooking)


