import {Schema, model} from'mongoose';
const bookingSchema = new Schema({

    firstName : {
        type: String,
        // required: true,
    },

    lastName : {
        type: String,
        // required: true,
    },

    sex : {
        type: String,
        enum : {
        values: ['male','female']
        },
        // required: true,
    },

    seatNumber : {
        type: Number,
        // required: true,
        unique : true,

    },
    email : {
        type: String,
        // required: true,
        unique : true, 
    },
})

export const booking = model('Booking', bookingSchema)