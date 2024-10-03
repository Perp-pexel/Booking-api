import { booking } from "../models/booking-model.js"


export const getAllBookings = (req, res, next) => {
    res.status(200).json('These are all bookings')
}

export const getOneBooking = (req, res, next) => {
    res.status(200).json('Get one booking')
}

export const postBooking = async (req, res, next) => {
    
   try {
     const newBooking =  new booking()
     const bookings = await newBooking.save(req.body)
     console.log('request', req)
 
     res.status(201).json ('post booking')
   } catch (error) {
    next(error);
    
   }
   
}
export const updateBooking =(req, res, next) => {
    res.status(200).json ('update a booking')
}

export const deleteBooking =(req, res, next) => {
    res.status(200).json ('delete a booking')
}