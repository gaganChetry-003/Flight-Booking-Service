const axios = require('axios');


const { BookingRepository } = require('../repositories');

const db = require('../models');
const AppError = require('../utils/errors/app-error');

async function createBooking(data) {
   try{
    const result = db.sequelize.transaction(async function bookingImpl(t){
        console.log("booking impl")
        console.log(`localhost:3000/api/v1/flights${data.flightId}`);
        const flight=await axios.get(`http://localhost:3000/api/v1/flights/${data.flightId}`);
        console.log(flight);
        return true;
    });

   }catch(error){
    console.log(error);
    throw error;

   }

}

module.exports = {
    createBooking
}