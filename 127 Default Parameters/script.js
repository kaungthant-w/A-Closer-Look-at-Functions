'use strict';
const bookings = [];

const createBooking = function(flightNum, numPassengers = 20, price = 99 * 8, totalSale= price * numPassengers, fligtTo = "Yangon" ) {

    //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
        totalSale,
        fligtTo
    };

    console.log(booking);
    console.log(bookings);

    bookings.push(booking);

    // console.log(bookings);


}

createBooking("LH320",23, 800, "Mandalay");
createBooking("LH322");
createBooking("LH32", undefined, undefined, undefined,"malaysia");
createBooking("LH32", null);
createBooking("LH32", undefined);
createBooking("LH321", false );
createBooking("LH32", true, 100);

